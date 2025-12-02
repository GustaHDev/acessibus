import React, { createContext, useState, useEffect, Children } from 'react';
import asyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/Api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadgin] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            try {
                const storagedUser = await asyncStorage.getItem('@RNAuth:user');
                const storagedToken = await asyncStorage.getItem('@RNAuth:token');

                if (storagedUser && storagedToken) {
                    api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
                    setUser(JSON.parse(storagedUser));
                }
            } catch (error) {
                console.log("Erro de storage", error);
            } finally {
                setLoadgin(false);
            }
        }
        loadStorageData();
    }, []);

    async function signIn(email, senha) {
        const response = await api.post('/auth/login', { email, senha });

        const { token, ...userData } = response.data;

        setUser(userData);
        api.defaults.headers.Authorization = `Bearer ${token}`;

        await asyncStorage.setItem('@RNAuth:user', JSON.stringify(userData));
        await asyncStorage.setItem('@RNAuth:token', token);
    }

    async function signOut() {
        await asyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
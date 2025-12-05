import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import api from '../services/Api';

export default function RecentsScreen({ navigation }) {
    const context = useContext(AuthContext);
    const signed = context?.signed || false;

    const [recents, setRecents] = useState([]);
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        if (signed) {
            setLoadingData(true);
            api.get('/recents')
                .then(res => setRecents(res.data))
                .catch(err => console.log("Erro ao buscar recentes:", err))
                .finally(() => setLoadingData(false));
        }
    }, [signed]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/logo-acessibus.png")} style={styles.logo} />
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Image source={require("../../assets/account_circle.png")} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                {!signed ? (
                    <>
                        <Text style={styles.text}> Você não está logado! Entre para ter acesso às últimas linhas acessadas </Text>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginScreen")}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <View style={{ width: '100%', height: '100%', padding: 20 }}>
                        <Text style={styles.title}>Recentes</Text>
                        {loadingData ? (
                            <ActivityIndicator color="#000" />
                        ) : recents.length === 0 ? (
                            <Text>Nenhuma linha foi acessada. Acesse uma linha para ver o histórico</Text>
                        ) : (
                            <FlatList
                                data={recents}
                                keyExtractor={item => String(item.id)}
                                renderItem={({ item }) => (
                                    <View style={styles.itemContainer}>
                                        <View>
                                            <Text style={styles.itemTitle}>{item.nome_linha || item.nome}</Text>
                                            <Text>{item.itinerario}</Text>
                                        </View>
                                        {/* Ícone de favorito se quiser implementar depois */}
                                        {item.favorito && <Text>❤️</Text>}
                                    </View>
                                )}
                            />
                        )}
                    </View>
                )}
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navIcon}>
                    <Image source={require("../../assets/home.png")} style={styles.img} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Recents")} style={styles.navIcon}>
                    <Image source={require("../../assets/recents.png")} style={styles.img} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Favorites")} style={styles.navIcon}>
                    <Image source={require("../../assets/favorites.png")} style={styles.img} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },

    logo: {
        width: 120,
        height: 70,
        resizeMode: "contain"
    },

    text: {
        fontSize: 16,
        textAlign: "center",
        padding: 50
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },

    img: {
        width: 60,
        height: 60,
        resizeMode: "contain"
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center'
    },

    micButton: {
        backgroundColor: "#1A6AD2",
        borderRadius: 200,
        padding: 40,
        marginBottom: 20,
        elevation: 5
    },

    soundwave: {
        width: 200,
        height: 80,
        resizeMode: "contain"
    },

    navbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        position: "absolute",
        bottom: 60,
        borderBottomColor: "#000",
        borderBottomWidth: 1
    },

    navIcon: {
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#000"
    },

    button: {
        backgroundColor: "#007AFF",
        padding: 15,
        borderRadius: 25,
        width: "60%",
        alignItems: "center",
        marginBottom: 20
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    itemContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    itemTitle: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

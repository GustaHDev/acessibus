import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/logo-acessibus.png")} style={styles.logo} />
            </View>

            <View style={styles.content}>
                <Image source={require("../../assets/account_circle.png")} />

                <Text style={styles.title}> Login </Text>

                <TextInput style={styles.input} placeholder='Email' keyboardType='email-address' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
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
        paddingTop: 60,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },

    logo: {
        width: 120,
        height: 70,
        resizeMode: "contain",
        left: 0
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
        bottom: 100
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },

    input: {
        width: "80%",
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginBottom: 15,
        borderRadius: 4
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

    socialContainer: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 40
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
    }
});

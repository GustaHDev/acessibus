import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function FavoritesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/logo-acessibus.png")} style={styles.logo} />
                <Image source={require("../../assets/account_circle.png")} onPress={() => { navigation.navigate("SignUp") }} />
            </View>

            <View style={styles.content}>

                <Text style={styles.text}> Você ainda não possui nenhuma linha favorita! Se cadastre para adicionar linhas </Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.buttonText}>Cadastre-se</Text>
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

    img: {
        width: 60,
        height: 60,
        resizeMode: "contain"
    },

    text: {
        fontSize: 16,
        textAlign: "center",
        padding: 50
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bottom: 100
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
    }
});

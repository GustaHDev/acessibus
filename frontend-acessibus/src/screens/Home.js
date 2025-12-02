import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { signOut, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../assets/logo-acessibus.png")} style={styles.logo} />
        <TouchableOpacity onPress={() => { user ? signOut() : navigation.navigate("SignUp") }}>
          <Image source={require("../../assets/account_circle.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>

        <TouchableOpacity style={styles.micButton}>
          <Image source={require("../../assets/mic_button.png")} />
        </TouchableOpacity>

        <Image source={require("../../assets/soundwave.png")} style={styles.soundwave} />
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

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  micButton: {
    backgroundColor: "#1A6AD2",
    borderRadius: 200,
    padding: 40,
    marginBottom: 100,
    elevation: 5,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center"
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
  }
});

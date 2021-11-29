import React, { Component, useState, useEffect } from "react";
import { TouchableOpacity } from 'react-native'
import firebase from "../../config/firebaseconfig"
import { StyleSheet, View, Text, Image, ImageBackground, TextInput, Platform, KeyboardAvoidingView } from "react-native";
import MaterialButtonPink from "../../public/components/MaterialButtonPink";
import MaterialIconTextbox from "../../public/components/MaterialIconTextbox";
import MaterialIconTextbox1 from "../../public/components/MaterialIconTextbox1";
import styles from "./style.js"

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const LoginFirebase = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
      let user = userCredential.user;
      navigation.navigate("Sobre")
    })
      .catch((error) => {
        setErrorLogin(true)
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        navigation.navigate("Sobre", { idUser: user.uid })
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/assets/images/logo.png")}
        resizeMode="contain"
        style={styles.img}
      ></Image>
      {/* <Text style={styles.logo}>LOGIN</Text> */}
      <TextInput
        style={styles.input}
        placeholder="EMAIL" 
        placeholderTextColor= "white"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="SENHA"
        placeholderTextColor= "white"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      {errorLogin === true
        ?
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons

            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}> Email ou senha invalido</Text>
        </View>
        :
        <View />
      }

      {email === "" || password === ""
        ?
        <TouchableOpacity
          disabled={true}
          style={styles.buttonLogin}
        >
          <Text style={styles.textButtomLogin}>Login</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={LoginFirebase}
        >
          <Text style={styles.textButtomLogin}>Login</Text>
        </TouchableOpacity>
      }
      <Text style={styles.registration}>
        Voce não tem cadastro?
        <Text
          style={styles.linkSubscribers}
          onPress={() => navigation.navigate("cadastro")}
        >
          Cadastre Agora!
        </Text>
      </Text>
      <View style={{ height: 100 }} />

    </View>
  );
}


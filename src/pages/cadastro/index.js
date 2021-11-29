import React, { useState, useEffect, Component } from "react";
import { TouchableOpacity } from 'react-native'
import firebase from "../../config/firebaseconfig"
import { StyleSheet, View, Image, ImageBackground, Text, TextInput, Platform, KeyboardAvoidingView } from "react-native";
import MaterialRightIconTextbox from "../../public/components/MaterialRightIconTextbox";
import MaterialRightIconTextbox1 from "../../public/components/MaterialRightIconTextbox1";
import MaterialButtonPink from "../../public/components/MaterialButtonPink";
import styles from "./style.js"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            let user = userCredential.user;
            navigation.navigate("Login", { idUser: user.uid })
        })
            .catch((error) => {
                setErrorRegister(true)
                let errorCode = error.code;
                let errorMessage = error.message;

            });
    }
    return (

        <View style={styles.container}>
                {/* <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "paddingTop" : "height"}
                    style={styles.container}
                > */}
                    <Image
                        source={require("../../../assets/assets/images/logo.png")}
                        resizeMode="contain"
                        style={styles.logo}
                    ></Image>

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

                    {errorRegister === true
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
                            style={styles.buttonRegister}
                        >
                            <Text style={styles.textButtonRegister}>Cadastrar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.buttonRegister}
                            onPress={register}
                        >
                            <Text style={styles.textButtonRegister}>Cadastrar</Text>
                        </TouchableOpacity>
                    }
                    <Text style={styles.login}>
                        Ja possui cadastro?
                        <Text
                            style={styles.linkLogin}
                            onPress={() => navigation.navigate("Login")}
                        >
                            Login
                        </Text>
                    </Text>
                    <View style={{ height: 100 }} />
                {/* </KeyboardAvoidingView> */}
        </View>
    );
}



import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from "react-native";
import MaterialButtonTransparentHamburger from "../../public/components/MaterialButtonTransparentHamburger";
import styles from "./style.js"

function sobre({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.backNavbar}>
          <Text style={styles.welcome}>
            Bem Vindo!!
          </Text>
          <MaterialButtonTransparentHamburger
            style={styles.bTNicon}
          ></MaterialButtonTransparentHamburger>
        </View>
      </View>
      <View style={styles.card1}>
        <View style={styles.cardImage1Stack}>
          <ImageBackground
            source={require("../../../assets/assets/images/img1.jpg")}
            resizeMode="contain"
            style={styles.cardImage1}
            imageStyle={styles.cardImage1_imageStyle}
          >
            <Text style={styles.cardText1}>
              Acessando o formulário, você irá se deparar {"\n"}com uma lista de
              itens relacionados ao colégio, {"\n"}onde poderá opinar sua
              satisfação sobre um {"\n"}determinado tópico e se ele é relevante
              para a {"\n"}instituição.
            </Text>
          </ImageBackground>
          <Text style={styles.cardTitle1}>
            Como é feito o {"\n"}formulário?
          </Text>
        </View>
      </View>
      <View style={styles.card2}>
        <View style={styles.cardImage2Stack}>
          <ImageBackground
            source={require("../../../assets/assets/images/img2.jpg")}
            resizeMode="contain"
            style={styles.cardImage2}
            imageStyle={styles.cardImage2_imageStyle}
          >
            <Text style={styles.cardText2}>
              A Pesquisa de Satisfação é utilizada pela {"\n"}instituição para
              se obter uma análise facilitada {"\n"}de como a qualidade de
              ensino e a organização {"\n"}estrutural do colégio é vista pelos
              alunos.
            </Text>
          </ImageBackground>
          <Text style={styles.cardTitle2}>Para que ele serve?</Text>
        </View>
      </View>
      <View style={styles.card3}>
        <View style={styles.cardImage3Stack}>
          <ImageBackground
            source={require("../../../assets/assets/images/img4.jpg")}
            resizeMode="contain"
            style={styles.cardImage3}
            imageStyle={styles.cardImage3_imageStyle}
          >
            <Text style={styles.cardText3}>
              Contate seu professor para mais informações {"\n"}sobre a
              plataforma!
            </Text>
          </ImageBackground>
          <Text style={styles.cardTitle3}>Alguma dúvida?</Text>
        </View>
      </View>
      <TouchableOpacity
          style={styles.buttonQues}
          onPress={() => navigation.push("pg1")}
          >
          <Text style={styles.textButtomQues}>Iniciar Formulário</Text>
        </TouchableOpacity>
    </View>
  );
}

export default sobre


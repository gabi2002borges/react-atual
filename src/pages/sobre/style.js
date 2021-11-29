import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(53,50,56,1)"
    },
    navbar: {
        width: 460,
        height: 94,
        marginTop: 0,
    },
    backNavbar: {
        width: 395,
        height: 94,
        backgroundColor: "rgba(194,42,31,1)",
        flexDirection: "row"
    },
    bTNicon: {
        height: 36,
        width: 36,
        marginLeft: 270,
        marginTop: 40,
    },
    card1: {
        width: 460,
        height: 220,
        marginTop: 7
    },
    cardImage1: {
        top: 0,
        left: 0,
        width: 425,
        height: 220,
        position: "absolute"
    },
    cardImage1_imageStyle: {
        opacity: 0.5
    },
    cardText1: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 101,
        marginLeft: 11
    },
    cardTitle1: {
        top: 10,
        left: 11,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 25
    },
    cardImage1Stack: {
        width: 360,
        height: 220
    },
    card2: {
        width: 360,
        height: 220,
        marginTop: 6
    },
    cardImage2: {
        top: 0,
        left: 0,
        width: 475,
        height: 220,
        position: "absolute"
    },
    cardImage2_imageStyle: {
        opacity: 0.5
    },
    cardText2: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 73,
        marginLeft: 67
    },
    cardTitle2: {
        top: 10,
        left: 69,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 25
    },
    cardImage2Stack: {
        width: 467,
        height: 220,
        marginLeft: -58
    },
    card3: {
        width: 360,
        height: 220,
        marginTop: 6
    },
    cardImage3: {
        top: 0,
        left: 0,
        width: 490,
        height: 220,
        position: "absolute"
    },
    cardImage3_imageStyle: {
        opacity: 0.5
    },
    cardText3: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 76,
        marginLeft: 73
    },
    cardTitle3: {
        top: 10,
        left: 69,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 25
    },
    cardImage3Stack: {
        width: 477,
        height: 220,
        marginLeft: -58
    },

    buttonQues: {
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C22A1F",
        borderRadius: 5,
        marginTop:10,
        marginLeft:70,
      },
    
    textButtomQues: {
        color: "#ffffff",
        fontSize:18,
    },
});

export default styles
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomWidth: 0,
    backgroundColor: "rgba(53,50,56,1)" 
},
navbar: {
    width: 400,
    height: 94,
    marginTop: 0,
    marginLeft: 0,
},
backNavbar: {
    width:400,
    height: 44,
    marginTop: 0,
    backgroundColor: "rgba(194,42,31,1)",
    flexDirection: "row"
},
textQ1: {
  color:  "rgba(255,255,255,1)",
  lineHeight: 20,
  marginTop: -40,
  fontSize:18,
  marginLeft: 20,
},

text: {
    color: "#ffffff",
  },

  questionLabel: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 20,
    fontWeight: "700",
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C22A1F",
    borderRadius: 5,
    padding: 10,
    margin: 15,
  },
  buttonProx: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C22A1F",
    borderRadius: 5,
    marginTop:-50,
    marginLeft:230,
  },

textButtomProx: {
    color: "#ffffff",
},

buttonVol: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C22A1F",
    borderRadius: 5,
    marginTop:0,
    marginLeft:10,
  },

textButtomVol: {
    color: "#ffffff",
},

});

export default styles;
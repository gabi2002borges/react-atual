import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomWidth: 0,
    backgroundColor: "rgba(40,40,47,1)"
  },
  btn_login: {
    height: 50,
    width: 165,
    backgroundColor: "rgba(194,42,31,1)",
    marginTop: 200,
    marginLeft: 117,
  },
  back_imageStyle: {
    opacity: 0.2
  },
  input: {
    width: 300,
    marginTop: 50,
    padding: 0,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#C22A1F",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#ffffff",
  },
  buttonRegister: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C22A1F",
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 95,
  },
  textButtonRegister: {
    color: "#ffffff",
    fontSize: 16,
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 80,
    marginLeft: 97
  },

  contentAlert: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },

  login: {
    marginTop: 280,
    marginRight: 50,
    color: "#ffffff",
    marginLeft:110,
  },
  linkLogin: {
    color: "#C22A1F",
    fontSize: 16,
    marginLeft:5,
  },

});

export default styles
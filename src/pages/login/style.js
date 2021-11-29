import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    borderBottomWidth: 0,
    backgroundColor: "rgba(40,40,47,1)"
  },
  logo: {
    fontFamily: "advent-pro-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    marginTop: 0,
    marginLeft: 150
  },
  img: {
    width: 200,
    height: 100,
    marginTop: 80,
    marginLeft: 97
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
    warningAlert: {
    paddingLeft: 10,
    color: "#bdbdbd",
    fontSize: 16,
  },

  buttonLogin: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C22A1F",
    borderRadius: 5,
    marginTop:60,
    marginLeft:100,
  },

  textButtomLogin: {
    color: "#ffffff",
  },
  registration: {
    marginTop: 310,
    marginRight: 50,
    color: "#ffffff",
    marginLeft:40,
  },
  linkSubscribers: {
    color: "#C22A1F",
    fontSize: 16,
    marginLeft:5,
  },
});

export default styles
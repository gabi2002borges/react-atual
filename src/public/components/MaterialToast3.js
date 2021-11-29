import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function MaterialToast3(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text1}>
        Multiline Text added to the toast of BuilderX
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UNDO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 288,
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,1)",
    padding: 24,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  text1: {
    fontSize: 14,
    color: "rgba(0,0,0,1)",
    lineHeight: 20
  },
  button: {
    marginLeft: 24
  },
  buttonText: {
    color: "#4CAF50",
    fontSize: 14
  }
});

export default MaterialToast3;

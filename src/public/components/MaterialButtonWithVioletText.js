import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithVioletText(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.caption || ""}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: "#000000"
  },
  caption: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginBottom: 0
  }
});

export default MaterialButtonWithVioletText;

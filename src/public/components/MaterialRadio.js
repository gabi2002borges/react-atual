import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialRadio(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.selected ? "radiobox-marked" : "radiobox-blank"}
        style={styles.radioIcon}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent"
  },
  radioIcon: {
    color: "rgba(194,42,31,1)",
    fontSize: 23,
    lineHeight: 24
  }
});

export default MaterialRadio;

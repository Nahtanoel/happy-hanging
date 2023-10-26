import React from "react";
import Bonhomme from "../components/bonhomme";
import { View, Text, Image, StyleSheet } from "react-native";

export default class PlayPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PlayPage with word</Text>
        <Bonhomme tentatives={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200, // Définissez la largeur souhaitée
    height: 200, // Définissez la hauteur souhaitée
  },
});

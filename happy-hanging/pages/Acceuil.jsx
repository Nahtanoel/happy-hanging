import React from "react";
import { Link } from "react-router-native";
import { StyleSheet, View, Text } from "react-native";
import EndScreen from "../components/EndScreen";

export default class Acceuil extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {EndScreen()}
        <Text style={styles.title}>Happy Hanging</Text>
        <Link to="/playpage" style={styles.button}>
          <Text style={styles.buttonText}>Jouer</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24, // Taille du titre
    fontWeight: "bold", // Style du texte en gras
    marginBottom: 220, // Espacement vertical après le titre
  },
  button: {
    backgroundColor: "#07a9df",
    borderRadius: 10, // Bord arrondi
    width: 200,
    padding: 10, // Espacement intérieur du bouton
  },
  buttonText: {
    color: "white", // Couleur du texte en blanc
    textAlign: "center",
    fontSize: 20, // Taille du texte du bouton
  },
});

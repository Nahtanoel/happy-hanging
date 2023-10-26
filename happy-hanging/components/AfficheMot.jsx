import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AfficheMot extends React.Component {
  render() {
    const { mot } = this.props;
    const espacement = 5 * mot.length; // Calcul de l'espacement

    const styles = StyleSheet.create({
      motContainer: {
        flexDirection: "row",
      },
      lettre: {
        fontSize: 42,
        fontWeight: "bold",
        marginRight: espacement, // Espacement proportionnel
      },
      derniereLettre: {
        fontSize: 42,
        fontWeight: "bold",
      },
    });

    const motAffiche = mot.split('').map((lettre, index) => (
      <Text key={index} style={index === mot.length - 1 ? styles.derniereLettre : styles.lettre}>_</Text>
    ));

    return (
      <View style={styles.motContainer}>
        {motAffiche}
      </View>
    );
  }
}

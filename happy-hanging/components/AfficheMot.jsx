import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AfficheMot extends React.Component {
  render() {
    const { mot } = this.props;

    const styles = StyleSheet.create({
      motContainer: {
        flexDirection: "row",
      },
      lettre: {
        fontSize: 42,
        fontWeight: "bold",
        marginRight: 10, // Espacement uniforme entre les lettres
      },
    });

    const lettresAffichees = mot
      .toUpperCase()
      .split("")
      .map((lettre, index) => (
        <Text key={index} style={styles.lettre}>
          {lettre}
        </Text>
      ));

    return <View style={styles.motContainer}>{lettresAffichees}</View>;
  }
}

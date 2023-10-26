import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default class Bonhomme extends React.Component {
  render() {
    const { tentatives } = this.props;

    const states_bonhomme_array = [
      require(`../assets/pendu-0.png`),
      require(`../assets/pendu-1.png`),
      require(`../assets/pendu-2.png`),
      require(`../assets/pendu-3.png`),
      require(`../assets/pendu-4.png`),
      require(`../assets/pendu-5.png`),
      require(`../assets/pendu-6.png`),
      require(`../assets/pendu-7.png`),
      require(`../assets/pendu-8.png`),
      require(`../assets/pendu-9.png`),
      require(`../assets/pendu-10.png`),
    ];

    return (
      <View>
        <Image
          source={states_bonhomme_array[tentatives]}
          style={styles.image}
        />
        <Text style={{ paddingTop: 10, fontSize: 20 }}>
          <Text style={{ fontWeight: "900" }}> {10 - tentatives} </Text>
          tentatives restantes
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

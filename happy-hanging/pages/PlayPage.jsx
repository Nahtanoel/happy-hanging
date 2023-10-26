import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

// Components
import AfficheMot from "../components/AfficheMot";
import Clavier from "../components/Clavier";

// Utils
import MotGenerator from "../utils/MotGenerator";

const motInitial = MotGenerator.genererMot();

export default class PlayPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motCourant: Array(motInitial.length).fill("_"),
    };
  }

  handleKeyPress = (touche) => {
    const toucheMin = touche.toLowerCase();
    const { motCourant } = this.state;

    console.log("motcourant : "+motCourant)
    console.log("mot : "+motInitial)


    // Recherchez la lettre appuyée dans le mot et mettez à jour le mot courant
    const nouveauMotCourant = motInitial
      .split("")
      .map((lettre, index) =>
        lettre === toucheMin || motCourant[index] !== "_"
          ? lettre
          : motCourant[index]
      );
    console.log('NouveauMot : ' + nouveauMotCourant )
    this.setState({ motCourant: nouveauMotCourant });
  };

  render() {
    return (
      <View style={styles.container}>
        <AfficheMot mot={this.state.motCourant.join("")} />
        <Clavier onKeyPress={this.handleKeyPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

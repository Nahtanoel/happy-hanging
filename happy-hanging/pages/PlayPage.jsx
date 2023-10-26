import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';
// Components
import AfficheMot from "../components/AfficheMot";
import Clavier from "../components/Clavier";
import Bonhomme from "../components/bonhomme";

// Utils
import MotGenerator from "../utils/MotGenerator";


const motInitial = MotGenerator.genererMot();

export default class PlayPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      motCourant: Array(motInitial.length).fill("_"),
      tentatives: 0,
      jeuFini: false,
      aGagne: false,
    };
  }

  handleKeyPress = (touche) => {
    console.log("Mot a trouver : " + motInitial);
    console.log("Tentatives : " + this.state.tentatives);
    const toucheMin = touche.toLowerCase();
    const { motCourant, tentatives, jeuFini } = this.state;

    if (!jeuFini) {
      // Vérifiez si la lettre est présente dans le mot initial
      if (motInitial.includes(toucheMin)) {
        const nouveauMotCourant = motInitial
          .split("")
          .map((lettre, index) =>
            lettre === toucheMin || motCourant[index] !== "_"
              ? lettre
              : motCourant[index]
          );

        this.setState((prevState) => ({
          motCourant: nouveauMotCourant,
          jeuFini: nouveauMotCourant.join("") === motInitial,
          aGagne: nouveauMotCourant.join("") === motInitial,
        }));
      } else {
        this.setState((prevState) => ({
          tentatives: prevState.tentatives + 1,
          jeuFini: prevState.tentatives + 1 === 10,
        }));
      }
    }
  };

  render() {
    const { motCourant, tentatives, jeuFini, aGagne } = this.state;

    return (
      <View style={styles.container}>
        <Bonhomme tentatives={this.state.tentatives} />
        <AfficheMot mot={motCourant.join("")} />
        {jeuFini ? (
          <View style={styles.messageContainer}>
            {aGagne ? (
              <>
                <Text style={styles.messageText}>Vous avez gagné!</Text>
                <ConfettiCannon styles={styles.container} count={75} fadeOut={true} origin={{x: 0, y: 0}} />
              </>
            ) : (
              <>
                <Text style={styles.messageText}>Vous avez perdu!</Text>
              </>
            )}
          </View>
        ) : (
          <Clavier onKeyPress={this.handleKeyPress} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  lotties: {
    position: "relative",
    top: 0,
    left: -300,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  image: {
    width: 200, // Définissez la largeur souhaitée
    height: 200, // Définissez la hauteur souhaitée
  },
  messageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

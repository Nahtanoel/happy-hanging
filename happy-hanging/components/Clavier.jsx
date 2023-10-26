import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Clavier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touches: "AZERTYUIOPQSDFGHJKLMWXCVBN".split(""), // Liste des touches du clavier
      touchesAppuyees: [], // Tableau des touches appuyées
    };
  }

  handleKeyPress = (touche) => {
    this.props.onKeyPress(touche); // Appeler la fonction de mise à jour du parent
    this.setState((prevState) => ({
      touchesAppuyees: [...prevState.touchesAppuyees, touche],
    }));
  };

  render() {
    const touchesLigne1 = this.state.touches.slice(0, 10); // A-P
    const touchesLigne2 = this.state.touches.slice(10, 20); // Q-M
    const touchesLigne3 = this.state.touches.slice(20); // W-N

    return (
      <View style={styles.container}>
        <View style={styles.ligne}>
          {touchesLigne1.map((touche) => (
            <TouchableOpacity
              key={touche}
              style={[
                styles.touche,
                this.state.touchesAppuyees.includes(touche) && styles.toucheAppuyee,
              ]}
              onPress={() => this.handleKeyPress(touche)}
              disabled={this.state.touchesAppuyees.includes(touche)}
            >
              <Text style={styles.toucheText}>{touche}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.ligne, styles.ligneMargin5]}>
          {touchesLigne2.map((touche) => (
            <TouchableOpacity
              key={touche}
              style={[
                styles.touche,
                this.state.touchesAppuyees.includes(touche) && styles.toucheAppuyee,
              ]}
              onPress={() => this.handleKeyPress(touche)}
              disabled={this.state.touchesAppuyees.includes(touche)}
            >
              <Text style={styles.toucheText}>{touche}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.ligne, styles.ligneMargin15]}>
          {touchesLigne3.map((touche) => (
            <TouchableOpacity
              key={touche}
              style={[
                styles.touche,
                this.state.touchesAppuyees.includes(touche) && styles.toucheAppuyee,
              ]}
              onPress={() => this.handleKeyPress(touche)}
              disabled={this.state.touchesAppuyees.includes(touche)}
            >
              <Text style={styles.toucheText}>{touche}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  ligne: {
    flexDirection: "row",
  },
  ligneMargin5: {
    marginLeft: 5,
    marginRight: 5,
  },
  ligneMargin15: {
    marginLeft: 15,
    marginRight: 15,
  },
  touche: {
    width: "10%",
    aspectRatio: 1,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  toucheText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  toucheAppuyee: {
    backgroundColor: "#CCCCCC", // Couleur de la touche lorsqu'elle est appuyée
  },
});

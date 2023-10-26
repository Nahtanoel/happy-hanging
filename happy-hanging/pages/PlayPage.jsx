import React from "react";
import { View, Text } from "react-native";
import AfficheMot from "../components/AfficheMot";
import MotGenerator from "../utils/MotGenerator";

const mot = MotGenerator.genererMot()
console.log(mot);
export default class PlayPage extends React.Component {

  render() {
    
    return (
      <View>
        <AfficheMot mot={mot} />
      </View>
    );
  }
}


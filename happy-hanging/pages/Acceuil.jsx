import React from "react";
import { Link } from "react-router-native";
import {  View,Text} from "react-native";

export default class Acceuil extends React.Component {
  render() {
    return (
      <View>
        <Text>Acceuil</Text>
        <Link to="/playpage">
          <Text>Jouerr</Text>
        </Link>
      </View>
    );
  } 
}


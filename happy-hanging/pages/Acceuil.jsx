import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

class Acceuil extends React.Component {

    
  render() {
    return (
      <View>
        <Text> Acceuil </Text>
        <Button title="Play" onPress={() => {Actions.playPage()}} />
      </View>
    );
  }
}
export default Acceuil;

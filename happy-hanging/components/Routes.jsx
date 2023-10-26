import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Acceuil from "../pages/Acceuil";
import PlayPage from "../pages/PlayPage";
import { Stack } from "react-native-router-flux";

class Routere extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="acceuil"
            component={Acceuil}
            options={{ title: "acceuil" }}
          />

          <Stack.Screen
            name="playpage"
            component={PlayPage}
            options={{ title: "playpage" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Routere;

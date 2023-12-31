import { NativeRouter, Route, Routes } from "react-router-native";
import { View ,StyleSheet} from "react-native";
import * as React from "react"
import Acceuil from "./pages/Acceuil";
import PlayPage from "./pages/PlayPage";
import About from "./pages/About";




class App extends React.Component {
  

  render() {

    return (
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            <Route path="/" Component={Acceuil} />
            <Route path="/playpage" Component={PlayPage} />
            <Route path="/about" Component={About} />
          </Routes>

        </View>
      </NativeRouter>

    );
  }



}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
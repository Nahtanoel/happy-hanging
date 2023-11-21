import React from "react";
import { Link } from "react-router-native";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";

export default class Acceuil extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>A propos</Text>

          <ScrollView
            contentContainerStyle={styles.paragraphContainer}
            horizontal={false}
          >
            <Image source={require('../assets/a.png')} style={styles.image} />
            <Text style={styles.paragraph}>
              Nathaniel GUIQUERRO, A travaillé sur la conception, réalisation du livrable, mise en place d'un routeur, ajout de la vibration du portable quand un mauvais choix est réalisé ,réalisation du générateur de mot ainsi que son implementation. Réalisation du clavier sur l'application et du masquage et démasquage du mot. Réalisation d'une page A propos contenant les informations de chaque membre du projet. Réalisation d'une partie du CSS.
            </Text>
          </ScrollView>

          <ScrollView
            contentContainerStyle={styles.paragraphContainer}
            horizontal={false}
          >
            <Image source={require('../assets/b.png')} style={styles.image} />
            <Text style={styles.paragraph}>
              Guillaume PRODAULT, A travaillé sur la conception, réalisation des images pour le nombre de tentatives, ajout de nombre de tentatives et raccordement des composants dans la page pour jouer, réalisation d'une partie du CSS.
            </Text>
          </ScrollView>

          <Link to="/" style={styles.button}>
            <Text style={styles.buttonText}>Acceuil</Text>
          </Link>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraphContainer: {
    flexDirection: 'column', // Utilisez une disposition en colonne
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10, // Espacement entre l'image et le texte
    borderRadius: 25,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    flexWrap: 'wrap', // Permet au texte de revenir à la ligne
  },
  button: {
    backgroundColor: '#07a9df',
    borderRadius: 10,
    width: 200,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

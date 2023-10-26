import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";

function EndScreen(props) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  useEffect(() => {
    modalTrigger();
  }, []);

  const { height } = Dimensions.get("window");

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255, 255, 255, 0.0)",
      "rgba(45, 57, 82, 0.5)",
      "rgba(45, 57, 82, 0.8)",
      "rgba(255, 255, 255, 0.0)",
    ],
  });

  const openModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const saveModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const up = () => {
    Animated.timing(animation, {
      toValue: 2,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      animation.setValue(0);
    });
  };

  const open = {
    transform: [{ scale: openModal }, { translateY: saveModal }],
  };

  return (
    <Animated.View
      style={[styles.background, { backgroundColor: color }]}
      pointerEvents="box-none"
    >
      <Animated.View style={[styles.background, open]}>
        <View style={styles.wrap}>
          <Text style={[styles.text, styles.mainText]}>Gagné !</Text>
          <Text style={[styles.text, styles.moreText]}>Félicitations</Text>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[styles.modalButton, styles.center]}
              onPress={close}
            >
              <Text style={styles.text}>Accueil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.center]}
              onPress={up}
            >
              <Text style={styles.text}>Rejouer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    padding: 20,
    margin: 20,
    borderRadius: 8,
    backgroundColor: "black",
    shadowColor: "gray",
    shadowOffset: {
      width: 8.4,
      height: 8.4,
    },
    shadowOpacity: 0.74,
    shadowRadius: 30,
    elevation: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  moreText: {
    textAlign: "center",
    marginTop: 64,
  },
  mainText: {
    fontSize: 51.2,
    textAlign: "center",
    marginTop: 20,
  },
  modalButton: {
    backgroundColor: "transparent",
    borderRadius: 100,
    borderColor: "white",
    marginTop: 64,
    borderWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 25,
    paddingRight: 25,
    marginHorizontal: 5,
    flex: 1,
  },
  text: {
    fontSize: 28.8,
    color: "#ecf0F9",
    fontWeight: "600",
    //fontFamily: "Avenir"
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EndScreen;

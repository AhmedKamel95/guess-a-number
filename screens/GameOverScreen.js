import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          //   source={{
          //     uri:
          //       "https://summit-tsi.com/wp-content/uploads/2017/03/ISS_6310_00074.jpg"
          //   }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> to guess
          the number <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 30
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: "center",
    fontSize: 17
  }
});

export default GameOverScreen;

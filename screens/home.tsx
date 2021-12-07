import React from "react";
import { Text, View } from "react-native";
import ScalableScreen from "../navigation/scalable-screen";

const HomeScreen = () => {
  return (
    <ScalableScreen>
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffd6d6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>I am the home screen.</Text>
      </View>
    </ScalableScreen>
  );
};

export default HomeScreen;

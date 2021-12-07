import React from "react";
import { Text, View } from "react-native";
import ScalableScreen from "../navigation/scalable-screen";

const ProfileScreen = () => {
  return (
    <ScalableScreen>
      <View
        style={{
          flex: 1,
          backgroundColor: "#77ceff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>I am the profile screen.</Text>
      </View>
    </ScalableScreen>
  );
};

export default ProfileScreen;

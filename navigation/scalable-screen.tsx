import React, { useState, useEffect } from "react";
import { Animated, Easing } from "react-native";
import { useDrawerStatus } from "@react-navigation/drawer";
import { setStatusBarStyle } from "expo-status-bar";

/** Provides the scaling animation for drawer screens. */
const ScalableScreen: React.FC = ({ children }) => {
  const status = useDrawerStatus();

  // Track the scaling factor of the screen. 1 = full, 0 = invisible.
  const [scale] = useState(new Animated.Value(1));

  useEffect(() => {
    const isClosed = status === "closed";

    const animation = Animated.timing(scale, {
      toValue: isClosed ? 1 : 0.8, // Play around with this value.
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    });

    animation.start();

    // Update status bar color depending on drawer state.
    setStatusBarStyle(isClosed ? "dark" : "light");

    return () => animation.stop();
  }, [status]);

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{ scale }, { perspective: 1000 }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default ScalableScreen;

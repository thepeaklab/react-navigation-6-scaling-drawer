import React from "react";
import { View } from "react-native";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HOME, PROFILE } from "./routes";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";

// Create the drawer navigator instance.
const DrawerNav = createDrawerNavigator();

// Drawer background color
const bgColor = "#5767f4";

const Drawer: React.FC = () => {
  // Detaches inactive screens for better performance.
  enableScreens();

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: bgColor }}>
        <DrawerNav.Navigator
          detachInactiveScreens={true}
          screenOptions={{
            drawerType: "slide",
            overlayColor: "transparent",
            headerShown: false,
            drawerInactiveTintColor: "#fff",
            drawerActiveTintColor: "#fff",
            drawerStyle: {
              // Set this to transparent to fix flickering line on Android.
              backgroundColor: "transparent",
            },
            sceneContainerStyle: {
              backgroundColor: bgColor,
            },
          }}
        >
          <DrawerNav.Screen name={HOME} component={HomeScreen} />
          <DrawerNav.Screen name={PROFILE} component={ProfileScreen} />
        </DrawerNav.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default Drawer;

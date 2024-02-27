import {
  useFonts,
  Glory_300Light,
  Glory_400Regular,
  Glory_600SemiBold,
  Glory_700Bold,
  Glory_800ExtraBold,
  Glory_500Medium,
} from "@expo-google-fonts/glory";
import { Gotu_400Regular } from "@expo-google-fonts/gotu";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import VerifyScreen from "./src/screens/VerifyScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Ads from "./src/screens/Ads";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Glory_300Light,
    Glory_400Regular,
    Glory_500Medium,
    Glory_600SemiBold,
    Glory_700Bold,
    Glory_800ExtraBold,
    Gotu_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ads"
          component={Ads}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// expo install expo-google-fonts
// npx expo install expo-font @expo-google-fonts/glory
// npm install --save @expo-google-fonts/glory
// npx expo install expo-font @expo-google-fonts/gotu
// npm install --save @expo-google-fonts/gotu
// npm i react-native-responsive-screen

import {
  useFonts,
  Glory_300Light,
  Glory_400Regular,
  Glory_600SemiBold,
  Glory_700Bold,
  Glory_800ExtraBold,
  Glory_500Medium,
} from "@expo-google-fonts/glory";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import VerifyScreen from "./screens/VerifyScreen";
import HomeScreen from "./screens/HomeScreen";
import Ads from "./screens/Ads";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Glory_300Light,
    Glory_400Regular,
    Glory_500Medium,
    Glory_600SemiBold,
    Glory_700Bold,
    Glory_800ExtraBold,
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
        <Stack.Screen name="Ads" component={Ads} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import {
  useFonts,
  Glory_300Light,
  Glory_400Regular,
  Glory_600SemiBold,
  Glory_700Bold,
  Glory_800ExtraBold,
} from "@expo-google-fonts/glory";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Glory_300Light,
    Glory_400Regular,
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
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
     </NavigationContainer>
  );
}

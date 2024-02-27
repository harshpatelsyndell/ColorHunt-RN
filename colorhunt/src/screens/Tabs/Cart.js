import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartItems = () => {
  return (
    <View>
      <Text>Cartttttt</Text>
    </View>
  )
}

const Cart = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="CartItems" component={CartItems} />
   </Stack.Navigator>
  );
};

export default Cart;



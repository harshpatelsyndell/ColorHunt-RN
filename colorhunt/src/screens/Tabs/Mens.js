import React from "react";
import { Text, View } from "react-native";

const Mens = ({ route }) => {
  const { category } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Text>Men's {category}</Text>
    </View>
  );
};

export default Mens;

import React from "react";
import DetailScreen from "./screens/DetailScreen";
import 'react-native-gesture-handler';
import Main from "./screens/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Svg, { Path, Rect } from "react-native-svg";
import { Image, StyleSheet, Text, View } from "react-native";
import profile from "../../../assets/images/profile.png";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutUs from "./screens/AboutUs";
import Cart from "./Cart";
import OrderHistory from "./OrderHistory";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const burgerMenuIcon = (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      y="5.14258"
      width="17.1429"
      height="1.71429"
      rx="0.857143"
      fill="white"
    />
    <Rect
      y="10.2852"
      width="10.2857"
      height="1.71429"
      rx="0.857143"
      fill="white"
    />
    <Rect
      x="6.85742"
      width="10.2857"
      height="1.71429"
      rx="0.857143"
      fill="white"
    />
  </Svg>
);

const MainScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: "",
          headerLeft: () => <BurgerMenu />,
          headerRight: () => <ProfileIcon />,
        }}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}

const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainScreen}  />
      <Drawer.Screen name="About Us" component={AboutUs} options={{ headerShown: false}}/>
      <Drawer.Screen name="Order History" component={OrderHistory} options={{ headerShown: false}}/>
      <Drawer.Screen name="Cart" component={Cart} options={{ headerShown: false}}/>
    </Drawer.Navigator>
  );
};

const BurgerMenu = () => {
  return <View style={styles.burgerMenuContainer}>{burgerMenuIcon}</View>;
};

const ProfileIcon = () => {
  return (
    <View style={styles.profileIconContainer}>
      <Image
        source={profile}
        style={{ width: 35, height: 35, borderRadius: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  burgerMenuContainer: {
    // marginHorizontal: 20,
    width: 35,
    height: 35,
    backgroundColor: "#212121",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  // profileIconContainer: { marginHorizontal: 20 },
});

export default Home;

import React from "react";

import "react-native-gesture-handler";

// import { createDrawerNavigator } from "@react-navigation/drawer";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import BottomTabBar from "./BottomTabBar";


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Cart" onPress={() => alert("Link to help")} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeWelcomes" initialParams={{params: "HomeWelcome"}} component={BottomTabBar} options={{ headerShown: false }} />
      <Drawer.Screen name="OrderHistorys" initialParams={{params: "OrderHistory"}} component={BottomTabBar} options={{ headerShown: false }} />
      <Drawer.Screen name="Carts" initialParams={{params: "Cart"}} component={BottomTabBar} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

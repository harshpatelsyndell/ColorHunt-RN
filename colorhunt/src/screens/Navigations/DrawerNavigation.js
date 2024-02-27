import React from "react";
import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Svg, { Path, Rect } from "react-native-svg";
import BottomTabBar from "./BottomTabBar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import profile1 from "../../../assets/images/profile1.png";
import { useNavigation } from "@react-navigation/native";

const CancelIcon = (
  <Svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect
      x="2.11719"
      y="1.33203"
      width="17.1429"
      height="1.71429"
      rx="0.857143"
      transform="rotate(45 2.11719 1.33203)"
      fill="#212121"
    />
    <Rect
      y="14.2734"
      width="10.2857"
      height="1.71429"
      rx="0.857143"
      transform="rotate(-45 0 14.2734)"
      fill="#212121"
    />
    <Rect
      x="7"
      y="7.27344"
      width="10.2857"
      height="1.71429"
      rx="0.857143"
      transform="rotate(-45 7 7.27344)"
      fill="#212121"
    />
  </Svg>
);

const HomeIcon = (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <Path
      fill="#fff"
      d="M7.683 20.65v-3.362c0-.86.737-1.556 1.647-1.556h3.33a1.7 1.7 0 0 1 1.164.456c.31.291.483.687.483 1.1v3.362c-.002.358.146.701.412.954.268.253.63.396 1.009.396h2.27a4.118 4.118 0 0 0 2.83-1.099A3.658 3.658 0 0 0 22 18.236V8.653c0-.808-.38-1.574-1.036-2.092L13.239.743c-1.343-1.02-3.268-.987-4.572.078L1.12 6.561A2.681 2.681 0 0 0 0 8.653v9.573C0 20.31 1.791 22 4.002 22H6.22c.786 0 1.426-.598 1.431-1.34l.032-.01Z"
    />
  </Svg>
);

const orderhistory = (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <Path
      fill="#fff"
      d="M4.052 13.893h7.062a6.3 6.3 0 0 1 2.026-2.316H4.052a.579.579 0 0 1 0-1.157h9.261a.579.579 0 0 1 .58.579.437.437 0 0 1-.012.127 6.653 6.653 0 0 1 2.2-.66c.233-.034.47-.05.705-.046.194 0 .387.01.58.034v-7.56A2.894 2.894 0 0 0 14.47 0H2.894A2.894 2.894 0 0 0 0 2.894V15.63a2.894 2.894 0 0 0 2.894 2.894h7.768a6.513 6.513 0 0 1-.197-1.03 4.535 4.535 0 0 1-.046-.707 6.172 6.172 0 0 1 .243-1.736h-6.61a.579.579 0 0 1 0-1.158Zm0-10.42h9.261a.579.579 0 1 1 0 1.158H4.052a.579.579 0 0 1 0-1.158Zm0 3.473h9.261a.579.579 0 1 1 0 1.158H4.052a.579.579 0 1 1 0-1.158Zm13.313 4.666a5.21 5.21 0 0 0-5.754 5.754c.041.396.13.784.267 1.158a5.21 5.21 0 1 0 5.487-6.912Zm0 5.175a.58.58 0 0 1-.579.58h-1.678a.58.58 0 0 1 0-1.159h1.1v-1.736a.58.58 0 0 1 1.157 0v2.315Z"
    />
  </Svg>
);

const cartIcon = (
  <Svg
    width="23"
    height="22"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.38281 20.3059C4.38281 19.363 5.14483 18.5996 6.08615 18.5996C7.01627 18.5996 7.77831 19.363 7.77831 20.3059C7.77831 21.2377 7.01627 22.001 6.08615 22.001C5.14483 22.001 4.38281 21.2377 4.38281 20.3059ZM16.9899 20.3059C16.9899 19.363 17.7519 18.5996 18.6932 18.5996C19.6233 18.5996 20.3854 19.363 20.3854 20.3059C20.3854 21.2377 19.6233 22.001 18.6932 22.001C17.7519 22.001 16.9899 21.2377 16.9899 20.3059Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.385 4.32114C21.0686 4.32114 21.5169 4.55688 21.9651 5.07326C22.4134 5.58965 22.4918 6.33054 22.3909 7.00296L21.3264 14.367C21.1247 15.7826 19.9144 16.8254 18.4912 16.8254H6.26515C4.77472 16.8254 3.54202 15.6804 3.41875 14.1998L2.38779 1.96262L0.695637 1.67075C0.247387 1.59217 -0.0664064 1.15437 0.0120374 0.705343C0.0904812 0.24509 0.527554 -0.0580026 0.987011 0.00935157L3.65968 0.413477C4.04069 0.481954 4.32085 0.795151 4.35446 1.17682L4.56739 3.69138C4.60101 4.05172 4.89239 4.32114 5.25099 4.32114H20.385ZM13.5941 10.1574H16.6982C17.1688 10.1574 17.5386 9.7757 17.5386 9.31545C17.5386 8.84397 17.1688 8.47352 16.6982 8.47352H13.5941C13.1234 8.47352 12.7536 8.84397 12.7536 9.31545C12.7536 9.7757 13.1234 10.1574 13.5941 10.1574Z"
      fill="white"
    />
  </Svg>
);

const notificationIcon = (
  <Svg
    width="19"
    height="22"
    viewBox="0 0 19 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M18.1836 10.6096C17.3671 9.67132 16.9962 8.85822 16.9962 7.47671V7.00699C16.9962 5.20678 16.5751 4.04689 15.6599 2.88699C14.2492 1.08567 11.8743 0 9.5494 0H9.4506C7.17463 0 4.87417 1.03581 3.439 2.76402C2.47369 3.94718 2.00383 5.15693 2.00383 7.00699V7.47671C2.00383 8.85822 1.65725 9.67132 0.81644 10.6096C0.197711 11.3009 0 12.1894 0 13.151C0 14.1137 0.320989 15.0254 0.965313 15.7666C1.80612 16.6551 2.99362 17.2222 4.2066 17.3209C5.96265 17.518 7.71881 17.5922 9.50056 17.5922C11.2812 17.5922 13.0373 17.4682 14.7945 17.3209C16.0064 17.2222 17.1939 16.6551 18.0347 15.7666C18.6779 15.0254 19 14.1137 19 13.151C19 12.1894 18.8023 11.3009 18.1836 10.6096Z"
      fill="white"
    />
    <Path
      d="M11.7458 18.9514C11.1869 18.8339 7.78247 18.8339 7.22364 18.9514C6.74607 19.06 6.22949 19.3125 6.22949 19.8663C6.25732 20.3948 6.57172 20.8613 7.00704 21.1571L7.00603 21.1582C7.56911 21.5901 8.23008 21.8649 8.92213 21.9636C9.29084 22.0134 9.66626 22.0112 10.0484 21.9636C10.7393 21.8649 11.4003 21.5901 11.9635 21.1582L11.9624 21.1571C12.3978 20.8613 12.7121 20.3948 12.7399 19.8663C12.7399 19.3125 12.2233 19.06 11.7458 18.9514Z"
      fill="white"
    />
  </Svg>
);

const Drawer = createDrawerNavigator();
// {Navigation, ...props}
function CustomDrawerContent(props) {
  // const navigation = useNavigation();
  // console.log("Navigation object:", navigation);
  const handleCloseDrawer = () => {
    console.log("Closing drawer...");
    // navigation.closeDrawer();
  };
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: "#212121" }}>
      <View
        style={{
          marginHorizontal: 19,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View>
            <Image source={profile1} style={{ width: 35, height: 35 }} />
          </View>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "Glory_700Bold",
                fontSize: 16,
              }}
            >
              Harsh
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleCloseDrawer}>
          <View
            style={{ backgroundColor: "white", padding: 10, borderRadius: 100 }}
          >
            {CancelIcon}
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const DrawerNavigation = () => {
  // const navigation = useNavigation();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: {
          marginLeft: -20,
          fontFamily: "Glory_700Bold",
          fontSize: 18,
        },
      }}
    >
      <Drawer.Screen
        name="Home Welcome"
        initialParams={{ params: "HomeWelcome" }}
        component={BottomTabBar}
        options={{
          headerShown: false,
          drawerIcon: () => HomeIcon,
        }}
      />
      <Drawer.Screen
        name="Order History"
        initialParams={{ params: "OrderHistory" }}
        component={BottomTabBar}
        options={{ headerShown: false, drawerIcon: () => orderhistory }}
      />
      <Drawer.Screen
        name="Cartss"
        initialParams={{ params: "Cart" }}
        component={BottomTabBar}
        options={{ headerShown: false, drawerIcon: () => cartIcon }}
      />
      <Drawer.Screen
        name="Notificationss"
        initialParams={{ params: "Notifications" }}
        component={BottomTabBar}
        options={{ headerShown: false, drawerIcon: () => notificationIcon }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

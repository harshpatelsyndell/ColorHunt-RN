import React from "react";
import "react-native-gesture-handler";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Svg, { Path, Rect, Circle, G, ClipPath, Defs } from "react-native-svg";
import BottomTabBar from "./BottomTabBar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import profile1 from "../../../assets/images/profile1.png";
import Wishlist from "../Tabs/Wishlist";
import splashh from "../../../assets/splashh.png";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import LoginScreen from "../LoginScreen";

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

const wishlistIcon = (
  <Svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 18C9.84483 18 9.68965 17.9233 9.53448 17.8465C4.10345 14.0864 1.31034 10.5565 1 7.18007V6.18249C1.31034 2.8828 3.48276 1.19458 5.42241 1.04111C7.82759 0.810898 8.99138 1.57827 10 2.57585C11.0086 1.57827 12.25 0.810898 14.5776 1.04111C16.5172 1.19458 18.6897 2.8828 19 6.10576V7.10334C18.7672 10.5565 15.9741 14.0097 10.4655 17.8465C10.3103 17.9233 10.1552 18 10 18Z"
      fill="white"
    />
  </Svg>
);

const contactUsIcon = (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="10" cy="10" r="10" fill="white" />
    <Path
      d="M9.125 13.3333H10.875V15H9.125V13.3333ZM10 5C8.06625 5 6.5 6.49167 6.5 8.33333H8.25C8.25 7.41667 9.0375 6.66667 10 6.66667C10.9625 6.66667 11.75 7.41667 11.75 8.33333C11.75 10 9.125 9.79167 9.125 12.5H10.875C10.875 10.625 13.5 10.4167 13.5 8.33333C13.5 6.49167 11.9338 5 10 5Z"
      fill="#212121"
    />
  </Svg>
);

const aboutUsIcon = (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="10" cy="10" r="10" fill="white" />
    <Path
      d="M9.89946 3.90405C9.62044 3.90522 9.36444 4.06468 9.18298 4.32623C9.00176 4.58744 8.90388 4.93566 8.90538 5.29377L8.93228 11.7215C8.93377 12.0796 9.03456 12.427 9.21797 12.6867C9.40161 12.9467 9.65893 13.104 9.93795 13.1028C10.217 13.1017 10.473 12.9422 10.6544 12.6807C10.8357 12.4194 10.9335 12.0712 10.932 11.7131L10.9051 5.28541C10.9036 4.9273 10.8029 4.57991 10.6194 4.32022C10.4358 4.0602 10.1785 3.90288 9.89946 3.90405Z"
      fill="#212121"
      stroke="#212121"
      stroke-width="0.2"
    />
    <Circle
      cx="9.90365"
      cy="15.7028"
      r="0.999888"
      transform="rotate(-0.239747 9.90365 15.7028)"
      fill="#212121"
      stroke="#212121"
      stroke-width="0.2"
    />
  </Svg>
);

const logoutIcon = (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clip-path="url(#clip0_317_1570)">
      <Path
        d="M19.4444 10.409C19.4433 10.4112 19.4424 10.413 19.4416 10.4145L19.3763 10.4798V10.5141C19.3656 10.532 19.3559 10.5526 19.3486 10.5758C19.3397 10.589 19.3274 10.6052 19.3115 10.6238C19.2877 10.6515 19.2633 10.6762 19.2426 10.6968L15.4108 14.4037L15.4054 14.4089L15.4003 14.4144C15.0452 14.8018 14.4183 14.8134 14.0114 14.4066C13.8084 14.2035 13.7096 13.9338 13.7096 13.7083C13.7096 13.4828 13.8084 13.2131 14.0114 13.0101L15.6781 11.3434L16.1049 10.9167H15.5013H5.54297C4.97271 10.9167 4.54297 10.4869 4.54297 9.91667C4.54297 9.3464 4.97271 8.91667 5.54297 8.91667H15.543H16.1465L15.7197 8.48989L14.0531 6.82322L14.0532 6.82306L14.0452 6.81571C13.6578 6.46056 13.6462 5.83361 14.0531 5.42678L14.0532 5.42694L14.0606 5.41893C14.4157 5.03149 15.0427 5.01994 15.4495 5.42678L19.2412 9.21844C19.3073 9.28453 19.3302 9.30877 19.3472 9.33651C19.3547 9.36152 19.365 9.38354 19.3763 9.40258V9.43689L19.4495 9.51011C19.4567 9.51731 19.4624 9.52303 19.4674 9.52809C19.4717 9.54787 19.4773 9.56455 19.4821 9.57737C19.4899 9.59834 19.4993 9.61751 19.5045 9.62783C19.5088 9.65888 19.517 9.6844 19.5237 9.70236C19.5319 9.72412 19.5417 9.74393 19.5467 9.75395L19.5504 9.76897C19.5821 9.89582 19.5821 10.0208 19.5504 10.1477L19.5467 10.1627C19.5417 10.1727 19.5319 10.1925 19.5237 10.2143C19.517 10.2323 19.5088 10.2578 19.5045 10.2888C19.4993 10.2992 19.4899 10.3183 19.4821 10.3393C19.4811 10.3419 19.4801 10.3446 19.4791 10.3475C19.4626 10.3723 19.4521 10.3934 19.4459 10.4059C19.4454 10.407 19.4448 10.4081 19.4444 10.409Z"
        fill="white"
        stroke="#212121"
        stroke-width="0.5"
      />
      <Path
        d="M11.082 12.5007V12.2507H10.832H5.54036C4.30344 12.2507 3.29036 11.2376 3.29036 10.0007C3.29036 8.76372 4.30344 7.75065 5.54036 7.75065H10.832H11.082V7.50065V2.41732C11.082 1.07091 9.9701 -0.0410156 8.6237 -0.0410156H2.41536C1.06896 -0.0410156 -0.0429688 1.07091 -0.0429688 2.41732V17.584C-0.0429688 18.9304 1.06896 20.0423 2.41536 20.0423H8.6237C9.9701 20.0423 11.082 18.9304 11.082 17.584V12.5007Z"
        fill="white"
        stroke="white"
        stroke-width="0.5"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_317_1570">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const Drawer = createDrawerNavigator();
// {Navigation, ...props}
function CustomDrawerContent(props) {
  const navigation = useNavigation();
  // console.log("Navigation object:", navigation);
  const handleCloseDrawer = () => {
    console.log("Closing drawer...");
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  // Add this function to handle navigation to the Wishlist screen
  const handleWishlistPress = () => {
    navigation.navigate("Wishlist");
  };
  const handleNotifications = () => {
    navigation.navigate("Notifications");
  };
  const handleCart = () => {
    navigation.navigate("Cart");
  };
  const handleOrderHistory = () => {
    navigation.navigate("OrderHistory");
  };

  const handleLogout = () => {
    navigation.navigate("Login"); // Navigate to the LoginScreen
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#212121" }}>
      <DrawerContentScrollView
        {...props}
        style={{ backgroundColor: "#212121" }}
      >
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
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 100,
              }}
            >
              {CancelIcon}
            </View>
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="OrderHistory"
          onPress={handleOrderHistory}
          icon={() => orderhistory}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Cart"
          onPress={handleCart}
          icon={() => cartIcon}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Wishlist"
          onPress={handleWishlistPress}
          icon={() => wishlistIcon}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Notifications"
          onPress={handleNotifications}
          icon={() => notificationIcon}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="About Us"
          // onPress={handleWishlistPress}
          icon={() => aboutUsIcon}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Contact Us"
          // onPress={handleWishlistPress}
          icon={() => contactUsIcon}
          labelStyle={styles.drawerItemLabel}
        />

        <View style={{ marginTop: 20 }}>
          <DrawerItem
            label="Logout"
            component={LoginScreen}
            onPress={handleLogout}
            icon={() => logoutIcon}
            labelStyle={styles.drawerItemLabel}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "212121",
          paddingVertical: 10,
          // height: 170,
        }}
      >
        <Image source={splashh} style={{ width: 161, height: 161 }} />
      </View>
    </View>
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
        name="DrawerHomeWelcome"
        initialParams={{ params: "HomeWelcome" }}
        component={BottomTabBar}
        options={{
          headerShown: false,
          drawerItemStyle: { display: "none" },
        }}
      />
      {/* <Drawer.Screen
        name="DrawerOrderHistory"
        initialParams={{ params: "OrderHistory" }}
        component={BottomTabBar}
        options={{
          headerShown: false,
          drawerIcon: () => orderhistory,
          drawerLabel: "Order History",
        }}
      /> */}
      {/* <Drawer.Screen
        name="DrawerCart"
        initialParams={{ params: "Cart" }}
        component={BottomTabBar}
        options={{
          headerShown: false,
          drawerIcon: () => cartIcon,
          drawerLabel: "Cart",
        }}
      /> */}
      {/* <Drawer.Screen
        name="DrawerWishlist"
        initialParams={{ params: "Wishlist" }}
        component={BottomTabBar}
        options={{
          // headerShown: false,
          drawerIcon: () => cartIcon,
          drawerLabel: "Wishlist",
        }}
      /> */}
      {/* <Drawer.Screen
        name="DrawerNotifications"
        initialParams={{ params: "Notifications" }}
        component={BottomTabBar}
        options={{
          headerShown: false,
          drawerIcon: () => notificationIcon,
          drawerLabel: "Notifications",
        }}
      /> */}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerItemLabel: {
    marginLeft: -20,
    fontFamily: "Glory_700Bold",
    fontSize: 18,
    color: "#fff",
  },
});

export default DrawerNavigation;

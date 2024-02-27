import React, { useRef, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Svg, { Path, Rect } from "react-native-svg";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Home from "../Tabs/Home";
import OrderHistory from "../Tabs/OrderHistory";
import Cart from "../Tabs/Cart";
import Notifications from "../Tabs/Notifications";
import Profile from "../Tabs/Profile";
import profile from "../../../assets/images/profile.png";
import { useNavigation } from "@react-navigation/native";

const HomeIcon = (
  <Svg xmlns="http://www.w3.org/2000/svg" width={17} height={19} fill="none">
    <Path
      fill="#212121"
      d="M5.937 17.396v-2.752c0-.703.57-1.272 1.273-1.272h2.572a1.274 1.274 0 0 1 1.273 1.272v2.752a1.097 1.097 0 0 0 1.098 1.104h1.755A3.086 3.086 0 0 0 17 15.42V7.58a2.23 2.23 0 0 0-.8-1.712l-5.97-4.76a2.76 2.76 0 0 0-3.533.064L.865 5.868A2.233 2.233 0 0 0 0 7.58v7.832A3.09 3.09 0 0 0 3.092 18.5h1.715c.607 0 1.1-.49 1.105-1.096l.025-.008Z"
    />
  </Svg>
);

const HomeIconInactive = (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <Path
      fill="#fff"
      d="M7.683 20.65v-3.362c0-.86.737-1.556 1.647-1.556h3.33a1.7 1.7 0 0 1 1.164.456c.31.291.483.687.483 1.1v3.362c-.002.358.146.701.412.954.268.253.63.396 1.009.396h2.27a4.118 4.118 0 0 0 2.83-1.099A3.658 3.658 0 0 0 22 18.236V8.653c0-.808-.38-1.574-1.036-2.092L13.239.743c-1.343-1.02-3.268-.987-4.572.078L1.12 6.561A2.681 2.681 0 0 0 0 8.653v9.573C0 20.31 1.791 22 4.002 22H6.22c.786 0 1.426-.598 1.431-1.34l.032-.01Z"
    />
  </Svg>
);

const orderhistoryInactive = (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <Path
      fill="#fff"
      d="M4.052 13.893h7.062a6.3 6.3 0 0 1 2.026-2.316H4.052a.579.579 0 0 1 0-1.157h9.261a.579.579 0 0 1 .58.579.437.437 0 0 1-.012.127 6.653 6.653 0 0 1 2.2-.66c.233-.034.47-.05.705-.046.194 0 .387.01.58.034v-7.56A2.894 2.894 0 0 0 14.47 0H2.894A2.894 2.894 0 0 0 0 2.894V15.63a2.894 2.894 0 0 0 2.894 2.894h7.768a6.513 6.513 0 0 1-.197-1.03 4.535 4.535 0 0 1-.046-.707 6.172 6.172 0 0 1 .243-1.736h-6.61a.579.579 0 0 1 0-1.158Zm0-10.42h9.261a.579.579 0 1 1 0 1.158H4.052a.579.579 0 0 1 0-1.158Zm0 3.473h9.261a.579.579 0 1 1 0 1.158H4.052a.579.579 0 1 1 0-1.158Zm13.313 4.666a5.21 5.21 0 0 0-5.754 5.754c.041.396.13.784.267 1.158a5.21 5.21 0 1 0 5.487-6.912Zm0 5.175a.58.58 0 0 1-.579.58h-1.678a.58.58 0 0 1 0-1.159h1.1v-1.736a.58.58 0 0 1 1.157 0v2.315Z"
    />
  </Svg>
);

const orderHistory = (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <Path
      fill="#212121"
      d="M4.052 13.893h7.062a6.3 6.3 0 0 1 2.026-2.316H4.052a.579.579 0 0 1 0-1.157h9.261a.579.579 0 0 1 .58.579.437.437 0 0 1-.012.127 6.653 6.653 0 0 1 2.2-.66c.233-.034.47-.05.705-.046.194 0 .387.01.58.034v-7.56A2.894 2.894 0 0 0 14.47 0H2.894A2.894 2.894 0 0 0 0 2.894V15.63a2.894 2.894 0 0 0 2.894 2.894h7.768a6.513 6.513 0 0 1-.197-1.03 4.535 4.535 0 0 1-.046-.707 6.172 6.172 0 0 1 .243-1.736h-6.61a.579.579 0 0 1 0-1.158Zm0-10.42h9.261a.579.579 0 1 1 0 1.158H4.052a.579.579 0 0 1 0-1.158Zm0 3.473h9.261a.579.579 0 1 1 0 1.158H4.052a.579.579 0 1 1 0-1.158Zm13.313 4.666a5.21 5.21 0 0 0-5.754 5.754c.041.396.13.784.267 1.158a5.21 5.21 0 1 0 5.487-6.912Zm0 5.175a.58.58 0 0 1-.579.58h-1.678a.58.58 0 0 1 0-1.159h1.1v-1.736a.58.58 0 0 1 1.157 0v2.315Z"
    />
  </Svg>
);

const cartIconInactive = (
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

const cartIcon = (
  <Svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.38281 20.8059C4.38281 19.863 5.14483 19.0996 6.08615 19.0996C7.01627 19.0996 7.77831 19.863 7.77831 20.8059C7.77831 21.7377 7.01627 22.501 6.08615 22.501C5.14483 22.501 4.38281 21.7377 4.38281 20.8059ZM16.9899 20.8059C16.9899 19.863 17.7519 19.0996 18.6932 19.0996C19.6233 19.0996 20.3854 19.863 20.3854 20.8059C20.3854 21.7377 19.6233 22.501 18.6932 22.501C17.7519 22.501 16.9899 21.7377 16.9899 20.8059Z"
      fill="#212121"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.385 4.82114C21.0686 4.82114 21.5169 5.05688 21.9651 5.57326C22.4134 6.08965 22.4918 6.83054 22.3909 7.50296L21.3264 14.867C21.1247 16.2826 19.9144 17.3254 18.4912 17.3254H6.26515C4.77472 17.3254 3.54202 16.1804 3.41875 14.6998L2.38779 2.46262L0.695637 2.17075C0.247387 2.09217 -0.0664064 1.65437 0.0120374 1.20534C0.0904812 0.74509 0.527554 0.441997 0.987011 0.509352L3.65968 0.913477C4.04069 0.981954 4.32085 1.29515 4.35446 1.67682L4.56739 4.19138C4.60101 4.55172 4.89239 4.82114 5.25099 4.82114H20.385ZM13.5941 10.6574H16.6982C17.1688 10.6574 17.5386 10.2757 17.5386 9.81545C17.5386 9.34397 17.1688 8.97352 16.6982 8.97352H13.5941C13.1234 8.97352 12.7536 9.34397 12.7536 9.81545C12.7536 10.2757 13.1234 10.6574 13.5941 10.6574Z"
      fill="#212121"
    />
  </Svg>
);

const notificationIconInactive = (
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
      fill="#212121"
    />
    <Path
      d="M11.7458 18.9514C11.1869 18.8339 7.78247 18.8339 7.22364 18.9514C6.74607 19.06 6.22949 19.3125 6.22949 19.8663C6.25732 20.3948 6.57172 20.8613 7.00704 21.1571L7.00603 21.1582C7.56911 21.5901 8.23008 21.8649 8.92213 21.9636C9.29084 22.0134 9.66626 22.0112 10.0484 21.9636C10.7393 21.8649 11.4003 21.5901 11.9635 21.1582L11.9624 21.1571C12.3978 20.8613 12.7121 20.3948 12.7399 19.8663C12.7399 19.3125 12.2233 19.06 11.7458 18.9514Z"
      fill="#212121"
    />
  </Svg>
);

const profileIconInactive = (
  <Svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.00002 14.4922C4.14607 14.4922 0 15.2402 0 18.2323C0 21.2255 4.12018 21.9999 9.00002 21.9999C13.854 21.9999 18 21.253 18 18.2598C18 15.2666 13.881 14.4922 9.00002 14.4922Z"
      fill="white"
    />
    <Path
      d="M8.99971 11.6428C12.3062 11.6428 14.9554 9.05218 14.9554 5.82138C14.9554 2.59058 12.3062 0 8.99971 0C5.69434 0 3.04395 2.59058 3.04395 5.82138C3.04395 9.05218 5.69434 11.6428 8.99971 11.6428Z"
      fill="white"
    />
  </Svg>
);

const profileIcon = (
  <Svg
    width="19"
    height="23"
    viewBox="0 0 19 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.50002 14.9922C4.64607 14.9922 0.5 15.7402 0.5 18.7323C0.5 21.7255 4.62018 22.4999 9.50002 22.4999C14.354 22.4999 18.5 21.753 18.5 18.7598C18.5 15.7666 14.381 14.9922 9.50002 14.9922Z"
      fill="#212121"
    />
    <Path
      d="M9.49971 12.1428C12.8062 12.1428 15.4554 9.55218 15.4554 6.32138C15.4554 3.09058 12.8062 0.5 9.49971 0.5C6.19434 0.5 3.54395 3.09058 3.54395 6.32138C3.54395 9.55218 6.19434 12.1428 9.49971 12.1428Z"
      fill="#212121"
    />
  </Svg>
);

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

const TabArr = [
  {
    route: "HomeWelcome",
    activeIcon: HomeIcon,
    inActiveIcon: HomeIconInactive,
    component: Home,
  },
  {
    route: "OrderHistory",
    label: "OrderHistory",
    activeIcon: orderHistory,
    inActiveIcon: orderhistoryInactive,
    component: OrderHistory,
  },
  {
    route: "Cart",
    label: "Cart",
    activeIcon: cartIcon,
    inActiveIcon: cartIconInactive,
    component: Cart,
  },
  {
    route: "Notifications",
    label: "Notifications",
    activeIcon: notificationIcon,
    inActiveIcon: notificationIconInactive,
    component: Notifications,
  },
  {
    route: "Profile",
    label: "Profile",
    activeIcon: profileIcon,
    inActiveIcon: profileIconInactive,
    component: Profile,
    tabHide: "true",
  },
];

const Tab = createBottomTabNavigator();

const TabButton = ({ item, onPress, accessibilityState }) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, { top: 0 }]}
    >
      <View
        style={
          focused
            ? { backgroundColor: "white", padding: 10, borderRadius: 7 }
            : { backgroundColor: "#212121", padding: 10, borderRadius: 7 }
        }
      >
        {focused ? item.activeIcon : item.inActiveIcon}
      </View>
    </TouchableOpacity>
  );
};

const BottomTabBar = ({ route }) => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName={
        route && route.params && route.params.params
          ? route.params.params
          : "HomeWelcome"
      }
      //   initialRouteName="HomeWelcome"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#212121",
          height: 70,
          position: "absolute",
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 20,
          ...(["Profile", "Cart"].includes(route.name) && { display: "none" }),
        },
      })}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={({ route }) => {
              if (route.name === "HomeWelcome") {
                return {
                  // headerShown: false,
                  title: '',
                  animationEnabled: true,
                  tabBarButton: (props) => <TabButton {...props} item={item} />,
                  headerLeft: () => {
                    return (
                      <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <BurgerMenu />
                      </TouchableOpacity>
                    );
                  },
                  headerRight: () => <ProfileIcon />,
                };
              }
              return {
                title: '',
                headerShown: false,
                animationEnabled: true,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              };
            }}
          />
        );
      })}
    </Tab.Navigator>
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

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  burgerMenuContainer: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
    backgroundColor: "#212121",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconContainer:{
    marginHorizontal: 20,
  }
});

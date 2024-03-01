import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from "react-native";
import Svg, { Path, Circle, Rect } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KidsSection, mensSection } from "./Constants";
// import tshirt1 from "../../../assets/images/tshirt/tshirt1.png";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mens from "./Mens";
import { ProfileIcon } from "../../components/ProfileIcon";
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const filterIcon = (
  <Svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="20" cy="20" r="20" fill="#212121" />
    <Path
      opacity="0.4"
      d="M18.6198 22.9297H13.8854C13.2862 22.9297 12.7998 23.4076 12.7998 23.9962C12.7998 24.5841 13.2862 25.0628 13.8854 25.0628H18.6198C19.219 25.0628 19.7054 24.5841 19.7054 23.9962C19.7054 23.4076 19.219 22.9297 18.6198 22.9297Z"
      fill="white"
    />
    <Path
      opacity="0.4"
      d="M27.1997 16.0326C27.1997 15.4447 26.7133 14.9668 26.1149 14.9668H21.3805C20.7814 14.9668 20.2949 15.4447 20.2949 16.0326C20.2949 16.6213 20.7814 17.0991 21.3805 17.0991H26.1149C26.7133 17.0991 27.1997 16.6213 27.1997 16.0326Z"
      fill="white"
    />
    <Path
      d="M17.7518 16.0322C17.7518 17.3762 16.6438 18.4655 15.2758 18.4655C13.9086 18.4655 12.7998 17.3762 12.7998 16.0322C12.7998 14.689 13.9086 13.5996 15.2758 13.5996C16.6438 13.5996 17.7518 14.689 17.7518 16.0322Z"
      fill="white"
    />
    <Path
      d="M27.2001 23.9665C27.2001 25.3098 26.0921 26.3991 24.7241 26.3991C23.3568 26.3991 22.248 25.3098 22.248 23.9665C22.248 22.6225 23.3568 21.5332 24.7241 21.5332C26.0921 21.5332 27.2001 22.6225 27.2001 23.9665Z"
      fill="white"
    />
  </Svg>
);

const searchIcon = (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M8.48192 15.9638C12.6141 15.9638 15.9638 12.6141 15.9638 8.48192C15.9638 4.34977 12.6141 1 8.48192 1C4.34977 1 1 4.34977 1 8.48192C1 12.6141 4.34977 15.9638 8.48192 15.9638Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M13.6855 14.0742L16.6189 17"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const backButtonLight = (
  <Svg
    width="23"
    height="15"
    viewBox="0 0 23 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.7917 7.59103V7.16622C12.7797 5.48142 12.6837 3.9778 12.5037 3.025C12.5037 3.007 12.3117 2.06261 12.1917 1.74821C11.9997 1.29341 11.6516 0.907007 11.2196 0.662207C10.8716 0.488207 10.5115 0.399414 10.1275 0.399414C9.82754 0.413814 9.3356 0.563819 8.9876 0.689819L8.6876 0.802612C6.7556 1.57301 3.04758 4.0918 1.61958 5.6314L1.51162 5.73943L1.05562 6.24341C0.755615 6.62861 0.599609 7.10141 0.599609 7.60901C0.599609 8.06381 0.74358 8.5186 1.01958 8.8858C1.10358 9.0046 1.23562 9.15702 1.35562 9.28662L1.81162 9.76303C3.37162 11.3482 6.75558 13.573 8.51958 14.3098C8.51958 14.3266 9.61154 14.7826 10.1275 14.7994H10.1996C10.9916 14.7994 11.7356 14.3446 12.1196 13.6102C12.2276 13.4086 12.3236 13.015 12.4076 12.6694L12.5396 12.0166C12.6956 10.9678 12.7917 9.35743 12.7917 7.59103ZM20.3996 9.42102C21.3956 9.42102 22.1996 8.60622 22.1996 7.59941C22.1996 6.59381 21.3956 5.77902 20.3996 5.77902L15.9597 6.17141C15.1797 6.17141 14.5436 6.80981 14.5436 7.59941C14.5436 8.38902 15.1797 9.02863 15.9597 9.02863L20.3996 9.42102Z"
      fill="white"
    />
  </Svg>
);

const cancelIcon = (
  <Svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12.7666 12.668L1.09934 1.00071"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M12.7666 1L1.09934 12.6673"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

const Home1 = ({ navigation }) => {
  const [filterModel, setFilterModel] = useState(false);
  const closeBottomSheet = () => {
    setFilterModel(false);
  };
  const openBottomSheet = () => {
    setFilterModel(true);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ margin: 20, fontFamily: "Glory_700Bold", fontSize: 25 }}>
          Welcome...
        </Text>
        <View style={styles.serachArea}>
          <View style={{ width: wp("80%"), position: "relative" }}>
            <View
              style={{
                position: "absolute",
                zIndex: 2,
                justifyContent: "center",
                height: 40,
                left: 20,
              }}
            >
              {searchIcon}
            </View>
            <TextInput
              placeholder="Search"
              style={{
                backgroundColor: "gray",
                marginRight: 15,
                backgroundColor: "#F1F1F1",
                height: 40,
                borderRadius: 30,
                paddingLeft: 50,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: wp("10%"),
            }}
            onPress={openBottomSheet}
          >
            {filterIcon}
          </TouchableOpacity>
        </View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={filterModel}
          onRequestClose={closeBottomSheet}
        >
          <View style={styles.filterModalContainer}>
            <View style={styles.filterModal}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "Glory_700Bold", fontSize: 24 }}>
                  Category
                </Text>
                <TouchableOpacity onPress={closeBottomSheet}>
                  <View
                    style={{
                      backgroundColor: "#212121",
                      color: "white",
                      width: 32,
                      height: 32,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {cancelIcon}
                  </View>
                </TouchableOpacity>
              </View>
              <Text>range</Text>
            </View>
          </View>
        </Modal>
        {/* mensSection    */}
        <View style={{ marginTop: 25, marginHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View>
              <Text style={{ fontFamily: "Glory_700Bold", fontSize: 18 }}>
                Men's
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: "Glory_600SemiBold", fontSize: 12 }}>
                View all
              </Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {mensSection.map((item) => (
              <TouchableOpacity
                key={item.category}
                style={{ alignItems: "center", marginTop: 17, marginRight: 15 }}
                onPress={() =>
                  navigation.navigate("mens", { category: item.category })
                }
              >
                <View style={{ width: 155, height: 170, borderRadius: 10 }}>
                  <Image
                    source={item.imageurl}
                    resizeMode="cover"
                    style={{ width: 155, height: 170, borderRadius: 10 }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: 20,
                    fontFamily: "Glory_700Bold",
                    fontSize: 20,
                  }}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {/* kids section  */}
        <View style={{ marginTop: 25, marginHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View>
              <Text style={{ fontFamily: "Glory_700Bold", fontSize: 18 }}>
                Kid's
              </Text>
            </View>
            <View>
              <Text style={{ fontFamily: "Glory_600SemiBold", fontSize: 12 }}>
                View all
              </Text>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {KidsSection[0].articles.map((item) => (
              <TouchableOpacity
                key={item.articleNo}
                style={{ alignItems: "center", marginTop: 17, marginRight: 15 }}
              >
                <View style={{ width: 155, height: 170, borderRadius: 10 }}>
                  <Image
                    source={item.imageurl}
                    resizeMode="cover"
                    style={{ width: 155, height: 170, borderRadius: 10 }}
                  />
                </View>
                <View style={{ marginTop: 5 }}>
                  <Text
                    style={{
                      fontFamily: "Glory_400Regular",
                      fontSize: 14,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {item.type}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Glory_400Regular",
                      fontSize: 14,
                      textAlign: "center",
                      fontWeight: "normal",
                    }}
                  >
                    $ {item.price}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Glory_400Regular",
                      fontSize: 14,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    T-Shirt
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

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

const Home = () => {
  const navigation = useNavigation();
  // const headerStyle = filterModel ? { backgroundColor: "rgba(0,0,0,0.5)" } : {};
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home1}
        // options={{ headerShown: false }}
        options={({ route }) => {
          return {
            // headerShown: false,
            title: "",
            headerShadowVisible: false,
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
            // headerStyle: headerStyle,
          };
        }}
      />
      <Stack.Screen
        name="mens"
        component={Mens}
        options={{
          title: "",
          headerShadowVisible: false,
          headerRight: () => <ProfileIcon />,
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Home1")}>
                <BackMenuDark />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const BurgerMenu = () => {
  return <View style={styles.burgerMenuContainer}>{burgerMenuIcon}</View>;
};

const BackMenuDark = () => {
  return (
    <View style={[styles.backMenuContainer, { backgroundColor: "#212121" }]}>
      {backButtonLight}
    </View>
  );
};

const styles = StyleSheet.create({
  serachArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  backMenuContainer: {
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  burgerMenuContainer: {
    width: 35,
    height: 35,
    backgroundColor: "#212121",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  filterModalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
  },
  filterModal: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    // alignItems: "center",
  },
});

export default Home;

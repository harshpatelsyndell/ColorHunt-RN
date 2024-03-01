import React from "react";
import "react-native-gesture-handler";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KidsSection, mensSection } from "./Constants";
// import tshirt1 from "../../../assets/images/tshirt/tshirt1.png";

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

const renderItem = ({ item }) => {
  return (
    <TouchableOpacity style={{ alignItems: "center", marginTop: 17 }}>
      <View style={{ width: 155, height: 170, borderRadius: 10 }}>
        <Image
          source={item.imageurl}
          resizeMode="cover"
          style={{ width: 155, height: 170, borderRadius: 10 }}
        />
      </View>
      <Text
        style={{ marginTop: 20, fontFamily: "Glory_700Bold", fontSize: 20 }}
      >
        {item.category}
      </Text>
    </TouchableOpacity>
  );
};
const renderItemKids = ({ item }) => {
  return (
    <TouchableOpacity style={{ alignItems: "center", marginTop: 17 }}>
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
  );
};

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <ScrollView style={{ flex: 1 }}> */}
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
        <View
          style={{
            width: wp("10%"),
          }}
        >
          {filterIcon}
        </View>
      </View>
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
        <View>
          <FlatList
            data={mensSection}
            renderItem={renderItem}
            horizontal
            ItemSeparatorComponent={<View style={{ width: 15 }} />}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
        <View>
          <FlatList
            data={KidsSection}
            // renderItem={renderItemKids}
            renderItem={({ item }) => {
              return (
                <FlatList
                  data={item.articles}
                  renderItem={renderItemKids}
                  ItemSeparatorComponent={<View style={{ width: 15 }} />}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              );
            }}
          />
        </View>
      </View>
      {/* </ScrollView> */}
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
});

export default Home;

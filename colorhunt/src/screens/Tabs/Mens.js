import React, { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { mensSection } from "./Constants";
import { useNavigation } from "@react-navigation/native";
import FilterModalRange from "../../components/FilterModalRange";

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

const Mens = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;
  const screenWidth = useWindowDimensions().width;
  const space = screenWidth < 600 ? 80 : 160;
  const numColumns = screenWidth < 600 ? 2 : 4;
  const cardHeight = screenWidth < 767 ? 170 : 230;
  const cardWidth = (screenWidth - space) / numColumns; // Subtracting margins from screen width
  const categoryData = mensSection.find((item) => item.category === category);

  const [filterModel, setFilterModel] = useState(false);
  const closeBottomSheet = () => {
    setFilterModel(false);
  };
  const openBottomSheet = () => {
    setFilterModel(true);
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={[styles.itemContainer, { width: cardWidth }]}
        onPress={() => navigation.navigate("productDetail", { details: item })}
      >
        <Image
          source={item.imageurl}
          resizeMode="cover"
          style={{ width: "100%", height: cardHeight, borderRadius: 8 }}
        />
        <View style={{ alignItems: "center", marginTop: 8 }}>
          <Text
            style={{
              fontFamily: "Glory_400Regular",
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {item.articleNo}
          </Text>
          <Text
            style={{
              fontFamily: "Glory_400Regular",
              fontSize: 14,
              textAlign: "center",
              fontWeight: "normal",
            }}
          >
            {item.type}
          </Text>
          <Text
            style={{
              fontFamily: "Glory_400Regular",
              fontSize: 14,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            ${item.price.toFixed(2)}
          </Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: 86 }}>
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
            alignItems: "flex-end",
          }}
          onPress={openBottomSheet}
        >
          {filterIcon}
        </TouchableOpacity>
        <FilterModalRange
          closeBottomSheet={closeBottomSheet}
          filterModel={filterModel}
        />
      </View>
      <Text
        style={{
          marginHorizontal: 20,
          fontSize: 18,
          fontFamily: "Glory_800ExtraBold",
        }}
      >
        {category === "All" ? "ALL Articles" : `Men's ${category}`}
      </Text>
      <FlatList
        data={categoryData.articles}
        renderItem={renderItem}
        keyExtractor={(item) => item.articleNo}
        numColumns={numColumns}
        key={numColumns}
        // columnWrapperStyle={{ justifyContent: "center" }}
        // ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  serachArea: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 30,
  },
  itemContainer: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "white",
    margin: 20,
    // backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 6,
      },
    }),
  },
});

export default Mens;

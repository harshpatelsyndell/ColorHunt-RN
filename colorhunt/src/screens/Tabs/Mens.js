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
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../Redux/wishlistReducer";

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

const unfillHeartIcon = (
  <Svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 18C9.84483 18 9.68966 17.9233 9.53448 17.8465C4.10345 14.0864 1.31034 10.5565 1 7.18007V6.18249C1.31034 2.8828 3.48276 1.19458 5.42241 1.04111C7.82759 0.810898 8.99138 1.57827 10 2.57585C11.0086 1.57827 12.25 0.810898 14.5776 1.04111C16.5172 1.19458 18.6897 2.8828 19 6.10576V7.10334C18.7672 10.5565 15.9741 14.0097 10.4655 17.8465C10.3103 17.9233 10.1552 18 10 18ZM6.19828 2.49911C5.96552 2.49911 5.73276 2.49911 5.5 2.49911C4.18103 2.65259 2.7069 3.80364 2.47414 6.18249V7.0266C2.7069 9.7124 5.18966 12.8586 9.92241 16.1583C14.6552 12.7819 17.1379 9.7124 17.3707 6.94986V6.10576C17.2155 3.80364 15.6638 2.57585 14.3448 2.49911C12.4828 2.34564 11.6293 2.80606 10.5431 4.18733C10.3879 4.3408 10.1552 4.49428 9.92241 4.49428C9.68965 4.49428 9.4569 4.41754 9.30172 4.18733C8.37069 3.03627 7.67241 2.49911 6.19828 2.49911Z"
      fill="#212121"
    />
  </Svg>
);

const fillHeartIcon = (
  <Svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M10 18C9.84483 18 9.68965 17.9233 9.53448 17.8465C4.10345 14.0864 1.31034 10.5565 1 7.18007V6.18249C1.31034 2.8828 3.48276 1.19458 5.42241 1.04111C7.82759 0.810898 8.99138 1.57827 10 2.57585C11.0086 1.57827 12.25 0.810898 14.5776 1.04111C16.5172 1.19458 18.6897 2.8828 19 6.10576V7.10334C18.7672 10.5565 15.9741 14.0097 10.4655 17.8465C10.3103 17.9233 10.1552 18 10 18Z"
      fill="#DA4A4A"
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
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const toggleWishlist = (item) => {
    if (
      wishlist.some((wishlistItem) => wishlistItem.articleNo === item.articleNo)
    ) {
      dispatch(removeFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
    }
  };

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
        style={[
          styles.itemContainer,
          { width: cardWidth, position: "relative" },
        ]}
        onPress={() => navigation.navigate("productDetail", { details: item })}
      >
        <Image
          source={item.imageurl}
          resizeMode="cover"
          style={{ width: "100%", height: cardHeight, borderRadius: 8 }}
        />
        <Pressable
          onPress={() => toggleWishlist(item)}
          style={{ position: "absolute", right: 15, top: 15 }}
        >
          {wishlist.some(
            (wishlistItem) => wishlistItem.articleNo === item.articleNo
          )
            ? fillHeartIcon
            : unfillHeartIcon}
        </Pressable>
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

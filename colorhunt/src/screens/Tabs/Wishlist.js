import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
  useWindowDimensions,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Svg, { Path, Circle } from "react-native-svg";
import { addToWishlist, removeFromWishlist } from "../../Redux/wishlistReducer";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from "react-native-reanimated";

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

const Wishlist = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const screenWidth = useWindowDimensions().width;
  const space = screenWidth < 600 ? 80 : 160;
  const numColumns = screenWidth < 600 ? 2 : 4;
  const cardHeight = screenWidth < 767 ? 170 : 230;
  const cardWidth = (screenWidth - space) / numColumns;

  const toggleWishlist = (item) => {
    if (
      wishlist.some((wishlistItem) => wishlistItem.articleNo === item.articleNo)
    ) {
      dispatch(removeFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={LinearTransition}
      >
        <Pressable
          style={[
            styles.itemContainer,
            { width: cardWidth, position: "relative" },
          ]}
          onPress={() =>
            navigation.navigate("productDetail", { details: item })
          }
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
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: 86 }}>
      <FlatList
        data={wishlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.articleNo}
        numColumns={numColumns}
        key={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Wishlist;

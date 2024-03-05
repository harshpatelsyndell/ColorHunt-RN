import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import detailTshirt from "../../../assets/images/detailTshirt.png";
import { useNavigation } from "@react-navigation/native";
import { BackMenuDark } from "./Home";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/CartReducer";

const cartIcon = (
  <Svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.4373 16.9996H5.21111C2.55676 16.9996 0.520444 16.0778 1.09885 12.3675L1.77234 7.33917C2.1289 5.48783 3.35703 4.7793 4.43462 4.7793H13.2455C14.3389 4.7793 15.4957 5.54116 15.9078 7.33917L16.5812 12.3675C17.0725 15.6588 15.0916 16.9996 12.4373 16.9996Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12.5561 4.59605C12.5561 2.61003 10.8817 1.00003 8.81624 1.00003C7.82163 0.995987 6.86631 1.37306 6.16152 2.04788C5.45674 2.7227 5.06054 3.63968 5.06055 4.59605"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11.3818 8.34375H11.3438"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M6.33497 8.34375H6.29688"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

const minusIcon = (
  <Svg
    width="13"
    height="2"
    viewBox="0 0 13 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 1L1.5 1"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

const addIcon = (
  <Svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M6.75 12L6.75 1.5"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M12 6.75L1.5 6.75"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

const ProductDetail = ({ route }) => {
  const productDetail = route.params;
  // console.log(productDetail);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const [quantities, setQuantities] = useState({
    color1: 0,
    color2: 0,
    color3: 0,
    color4: 0,
  });

  useFocusEffect(
    React.useCallback(() => {
      const initialQuantities = cartItems.find(
        (item) => item.articleNo === productDetail.details.articleNo
      )?.quantities || {
        color1: 0,
        color2: 0,
        color3: 0,
        color4: 0,
      };
      setQuantities(initialQuantities);
    }, [cartItems, productDetail])
  );

  const incrementQuantity = (color) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [color]: prevQuantities[color] + 1,
    }));
  };

  const decrementQuantity = (color) => {
    if (quantities[color] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [color]: prevQuantities[color] - 1,
      }));
    }
  };

  const totalQuantity =
    quantities.color1 +
    quantities.color2 +
    quantities.color3 +
    quantities.color4;

  const handleAddToCart = () => {
    const totalQuantity =
      quantities.color1 +
      quantities.color2 +
      quantities.color3 +
      quantities.color4;

    if (totalQuantity > 0) {
      dispatch(
        addToCart({
          articleNo: productDetail.details.articleNo,
          imageurl: productDetail.details.imageurl,
          type: productDetail.details.type,
          price: productDetail.details.price,
          // details: productDetail.details,
          quantities: { ...quantities },
          totalPrice:
            productDetail.details.price *
            (quantities.color1 +
              quantities.color2 +
              quantities.color3 +
              quantities.color4),
        })
      );
    }
    navigation.navigate("Cart");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "white",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeWelcome")}
        style={{
          position: "absolute",
          top: StatusBar.currentHeight + 10,
          left: 16,
          zIndex: 2,
        }}
      >
        <BackMenuDark />
      </TouchableOpacity>
      <View style={{ flex: 1, height: hp("100%") }}>
        <ScrollView style={{ flex: 1, height: hp("100%") }}>
          <ImageBackground
            source={productDetail.details.imageurl}
            resizeMode="cover"
            style={{
              flex: 1,
              height: hp("50%"),
              width: wp("100%"),
              position: "relative",
            }}
          >
            <LinearGradient
              colors={["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.97)"]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 74,
                paddingHorizontal: 20,
                paddingBottom: 10,
                zIndex: 2,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                  fontFamily: "Glory_600SemiBold",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Article No: {productDetail.details.articleNo}
              </Text>
            </LinearGradient>
          </ImageBackground>

          <View style={styles.contentContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Size
                </Text>
                <View
                  style={{
                    elevation: 2,
                    borderRadius: 12,
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.25)",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 178,
                    height: 53,
                  }}
                >
                  <View style={styles.sizeButton}>
                    <Text
                      style={{
                        fontFamily: "Glory_500Medium",
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      M
                    </Text>
                  </View>
                  <View style={styles.sizeButton}>
                    <Text
                      style={{
                        fontFamily: "Glory_500Medium",
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      L
                    </Text>
                  </View>
                  <View style={styles.sizeButton}>
                    <Text
                      style={{
                        fontFamily: "Glory_500Medium",
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      XL
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Category
                </Text>
                <View
                  style={{
                    elevation: 2,
                    borderRadius: 12,
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.25)",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 131,
                    height: 53,
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    {productDetail.details.type}
                  </Text>
                </View>
              </View>
            </View>
            {/******************* Color, inStock, Quantity *******************/}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              {/* color  */}
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Color
                </Text>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    01-30 TO 36
                  </Text>
                </View>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    02-30 TO 36
                  </Text>
                </View>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    03-30 TO 36
                  </Text>
                </View>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    04-30 TO 36
                  </Text>
                </View>
              </View>
              {/* Stock  */}
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Available in Stock
                </Text>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    10
                  </Text>
                </View>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    15
                  </Text>
                </View>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    10
                  </Text>
                </View>
                <View style={styles.colorbtn}>
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    15
                  </Text>
                </View>
              </View>
              {/* Add Qty.  */}
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Add Qty.
                </Text>
                <View style={styles.qtnbtn}>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => decrementQuantity("color1")}
                  >
                    {minusIcon}
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        color: "rgba(0, 0, 0, 1)",
                        fontSize: 16,
                        fontFamily: "Glory_600SemiBold",
                      }}
                    >
                      {quantities.color1}
                    </Text>
                  </View>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => incrementQuantity("color1")}
                  >
                    {addIcon}
                  </Pressable>
                </View>
                <View style={styles.qtnbtn}>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => decrementQuantity("color2")}
                  >
                    {minusIcon}
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        color: "rgba(0, 0, 0, 1)",
                        fontSize: 16,
                        fontFamily: "Glory_600SemiBold",
                      }}
                    >
                      {quantities.color2}
                    </Text>
                  </View>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => incrementQuantity("color2")}
                  >
                    {addIcon}
                  </Pressable>
                </View>
                <View style={styles.qtnbtn}>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => decrementQuantity("color3")}
                  >
                    {minusIcon}
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        color: "rgba(0, 0, 0, 1)",
                        fontSize: 16,
                        fontFamily: "Glory_600SemiBold",
                      }}
                    >
                      {quantities.color3}
                    </Text>
                  </View>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => incrementQuantity("color3")}
                  >
                    {addIcon}
                  </Pressable>
                </View>
                <View style={styles.qtnbtn}>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => decrementQuantity("color4")}
                  >
                    {minusIcon}
                  </Pressable>
                  <View>
                    <Text
                      style={{
                        color: "rgba(0, 0, 0, 1)",
                        fontSize: 16,
                        fontFamily: "Glory_600SemiBold",
                      }}
                    >
                      {quantities.color4}
                    </Text>
                  </View>
                  <Pressable
                    style={styles.addButton}
                    onPress={() => incrementQuantity("color4")}
                  >
                    {addIcon}
                  </Pressable>
                </View>
              </View>
            </View>
            {/******************* article ratio, Article Rate ****************/}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Article Ratio
                </Text>
                <View
                  style={{
                    elevation: 2,
                    borderRadius: 12,
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.25)",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 131,
                    height: 53,
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    01.01.01
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Glory_600SemiBold",
                    marginBottom: 5,
                  }}
                >
                  Article Rate
                </Text>
                <View
                  style={{
                    elevation: 2,
                    borderRadius: 12,
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.25)",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: 131,
                    height: 53,
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: 18,
                      fontFamily: "Glory_500Medium",
                    }}
                  >
                    {productDetail.details.price}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontFamily: "Glory_400Regular", fontSize: 11 }}>
            Total Price
          </Text>
          <Text style={{ fontFamily: "Glory_700Bold", fontSize: 18 }}>
            {productDetail.details.price *
              (quantities.color1 +
                quantities.color2 +
                quantities.color3 +
                quantities.color4)}
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: totalQuantity === 0 ? "#777" : "#212121",
            width: 208,
            height: 50,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={totalQuantity === 0 ? null : handleAddToCart}
        >
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <View>{cartIcon}</View>
            <Text
              style={{
                fontFamily: "Glory_700Bold",
                fontSize: 18,
                color: "white",
              }}
            >
              Add To Cart
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
    bottom: 80,
    backgroundColor: "#fff",
    height: hp("50%"),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 3,
    padding: 20,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "rgba(196, 196, 196, 1)",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    width: 34,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  colorbtn: {
    // elevation: 2,
    borderRadius: 12,
    // backgroundColor: "rgba(244, 244, 244, 1)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    width: 115,
    height: 40,
    marginBottom: 10,
  },
  qtnbtn: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 115,
    height: 40,
    marginBottom: 10,
  },
});

export default ProductDetail;

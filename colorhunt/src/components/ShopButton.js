import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import logoBlack from "../../assets/logoBlack.png";
import splashh from "../../assets/splashh.png";

const ShopButton = ({
  position,
  currentIndex,
  description,
  offerType,
  offerOff,
  btnbg,
  btncolor,
  navigation,
}) => {
  const windowWidth = useWindowDimensions().width;
  const isTablet = windowWidth > 768; // Define your own threshold for tablet screens

  const shopButtonStyles = [styles.shopButton, styles[position]];
  if (position === "rightTop" && isTablet) {
    shopButtonStyles.push({ right: wp("10%") });
  }
  if (position === "rightBottom" && isTablet) {
    shopButtonStyles.push({ top: hp("40%") });
  }
  if (position === "leftBottom" && isTablet) {
    shopButtonStyles.push({ left: wp("10%") });
  }

  return (
    <View style={shopButtonStyles}>
      {currentIndex === 0 ? (
        <>
          <Image
            source={splashh}
            style={{
              width: isTablet ? 250 : 130,
              height: isTablet ? 250 : 130,
              resizeMode: "cover",
              alignSelf: "center",
            }}
          />
          {description && (
            <View style={{ marginTop: 15, alignSelf: "center" }}>
              <Text
                style={{
                  fontFamily: "Gotu_400Regular",
                  width: 130,
                  fontSize: isTablet ? 23 : 18,
                  textAlign: "center",
                  lineHeight: 23,
                  color: "#fff",
                }}
              >
                {description}
              </Text>
            </View>
          )}
          <View style={{ marginTop: 15, alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "Gotu_400Regular",
                fontWeight: "bold",
                width: isTablet ? 200 : 130,
                fontSize: isTablet ? 30 : 23,
                textAlign: "center",
                color: "#fff",
              }}
            >
              {offerType}
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "Gotu_400Regular",
                fontWeight: "bold",
                width: isTablet ? 250 : 130,
                fontSize: isTablet ? 30 : 23,
                textAlign: "center",
                color: "#fff",
              }}
            >
              {offerOff}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Image
            source={logoBlack}
            style={{
              width: isTablet ? 250 : 130,
              height: isTablet ? 250 : 130,
              resizeMode: "cover",
              alignSelf: "center",
            }}
          />
          {description && (
            <View style={{ marginTop: 15, alignSelf: "center" }}>
              <Text
                style={{
                  fontFamily: "Gotu_400Regular",
                  width: 130,
                  fontSize: isTablet ? 23 : 18,
                  textAlign: "center",
                  lineHeight: 23,
                  color: "#000",
                }}
              >
                {description}
              </Text>
            </View>
          )}
          <View style={{ marginTop: 15, alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "Gotu_400Regular",
                fontWeight: "bold",
                width: isTablet ? 200 : 154,
                fontSize: isTablet ? 30 : 23,
                textAlign: "center",
                color: "#000",
              }}
            >
              {offerType}
            </Text>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontFamily: "Gotu_400Regular",
                fontWeight: "bold",
                width: isTablet ? 250 : 154,
                fontSize: isTablet ? 30 : 23,
                textAlign: "center",
                color: "#000",
              }}
            >
              {offerOff}
            </Text>
          </View>
        </>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          backgroundColor: `${btnbg}`,
          height: 49,
          width: 109,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <Text style={[styles.shopButtonText, { color: `${btncolor}` }]}>
          SHOP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "black",
  },
  shopButton: {
    position: "absolute",
    padding: 10,
    borderRadius: 5,
  },
  rightTop: {
    top: hp("10%"),
    right: wp("5%"),
  },
  rightBottom: {
    top: hp("50%"),
    right: wp("5%"),
  },
  leftBottom: {
    bottom: hp("10%"),
    left: wp("2%"),
  },
  shopButtonText: {
    fontWeight: "bold",
    fontFamily: "Gotu_400Regular",
    fontSize: 23,
  },
});

export default ShopButton;

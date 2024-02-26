import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { Easing } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import logoBlack from "../assets/logoBlack.png";
import splashh from "../assets/splashh.png";
import { useNavigation } from '@react-navigation/native';
import ShopButton from "../components/ShopButton";


const FadeInOutImage = ({ source }) => {
  const opacity = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 400,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    return () => {
      opacity.setValue(0); // Reset opacity when component unmounts or source changes
    };
  }, [source]); // Reset animation when source changes

  return (
    <Animated.View
      style={{ opacity, height: hp("98%"), backgroundColor: "plum" }}
    >
      <Image
        source={source}
        style={{ width: "100%", height: "100%", resizeMode: 'stretch'}}
      />
    </Animated.View>
  );
};

const Dot = ({ active }) => (
  <View style={[styles.dot, active && styles.activeDot]} />
);



const Ads = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;
// const windowheight = useWindowDimensions().height;

let carousel1;
if (windowWidth > 500) {
  carousel1 = { uri: "https://s3-alpha-sig.figma.com/img/49ce/818e/f6d5e40ffa8d5e7bf756acf12cc6d570?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I6WkDvPYj2KHCe-B~W4fe~TKxX1IhyCNY6drZPacrIFWA~yIFegYWAFs1~Aut24VwpawLweBs5BgETNU4TPJk6XQoPKuiRdRy~-kdaado3UqAd1chL7Sf-un9CJGr~3h88RSMsZ0~5p2okQVjEFgl53QK8Clu0i2GxHOM53iAEdhxhOno-FtvnuNOmlk-~48ltGugSc8Bz725myz1OrF9Ws3wqLifmpDdxR3aKORQVGgZVw0JDaD9zx6A~1MvkAIaDkXIr8FTA0ootx0Q8qChIFKXUEzFwQx8Pl-rIkZfXQAfwXyA9B1MG0nMJhs3kx2H9zBOh9meyVv0XNBM7Howg__" };
} else {
  carousel1 = require("../assets/images/c4.png");
}
let carousel2;
if (windowWidth > 500) {
  carousel2 = { uri: "https://s3-alpha-sig.figma.com/img/6070/65b3/0112cfe473f9a24049d230652c7f78be?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QmBWMdn8aDz7erRsBvkDRosi3RD-TYk8o22qTr0ehNqvs-08pIX983JCXqhD52TjGs4b7~y0ykbdu6zCY0PSzqdP~THfPObrGc9XQtyutbBfZ88R1xp9X45uqz5D~S215Se2tq26zy2W5Q-cQIRtL1DJETLI0jwrHO7TboJj39dthV6Fu7ptLV2fevSqCCZGVTTbymRprOaIOqsKtHZUYaj29T-X8DkoT753A-mDJx9nmPiO9aecAZKddFMawK65Mltcx-WJD1boFmc5p~qhwP5rFqP5P7C2w-OpstazdELxM19lPtKJ8pvnqXjVMo-66vDjTvSJp8IG1hnunycPtg__" };
} else {
  carousel2 = require("../assets/images/c2.png");
}
let carousel3;
if (windowWidth > 500) {
  carousel3 = { uri: "https://s3-alpha-sig.figma.com/img/9c69/c4e7/aebb13886c9736b85ac5c70283b771fa?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZnodukXJLg~5Sh49B0XT7AwDEJRnCyos5ENY19C6VKndCkDp1q~PW0a-38ZF0Hl2e1K1INalsSl~qbBtTVbL2PwWOvVmqs0IPpeG3U5AByNVHHO1pzH7I4cF2exLjzs8uPWwxwwiFdZ9XZLMZkES6DgpOljXtaYZqc0hkJyv73YGl43cJ6sYpq4YxYKLwtVRAFDpe5VzPhJe9olA~u7rnaRCSLoItgQOg-tsSF446Oghx-8ABGjQNeQL8ocBfOgRYDPGt~vcQ2y7nfoQ2QCP4yA6y4uZYEPjWjHAkGswOhVq6ua4nXJUTc1TTTU9UFEgvroX3P-bbT7~j7yumrLTaw__" };
} else {
  carousel3 = require("../assets/images/c3.png");
}
let carousel4;
if (windowWidth > 500) {
  carousel4 = { uri: "https://s3-alpha-sig.figma.com/img/08bc/a3f2/007ec1151e25ca882641f7c553a66312?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KngLxaI2oVPRcYiDu28ZYOeIiuHzzZc-FP60vuS3UoIb6bFPcnsG2y7oXTgYDpg7DCoKGJrX3~z2jsQrUawRDrxSnOG82fdql5hghzTNI9dNSI49~O8uadEfYPVjUm1ZrxUbIfRTEKVvwfZGyI2GE~PLKJdIqY1FnZyrdtihmewz0F5er3d0-8zgI3lzSlCzQjoL53Cicqq1tiDP-4B~VuGGVRFPCBKkoSQEUUr7P6UPPQZBdg69H7QSK7LPTyla4~rr3uj5zZcR4nUpzyppCFb0mLA02OpF6sZi-JqIpvHDN-72RsuXXFhrnvG8kacuA2VWCaIUeVg1G-7Xs85-GA__" };
} else {
  carousel4 = require("../assets/images/c1.png");
}

const images = [
  {
    source: carousel1,
    buttonPosition: "rightTop",
    description: "SMART FORMALS",
    offerType: "MIN",
    OfferOff: "30% OFF*",
    btnbg: "white",
    btncolor: "black"
  },
  { source: carousel2, buttonPosition: "rightBottom", offerType: "FLAT", OfferOff: "40-50% OFF*", btnbg: "white", btncolor: "black" },
  { source: carousel3, buttonPosition: "leftBottom", description: "BEST PICKS", offerType: "MIN", OfferOff: "30% OFF*", btnbg: "black", btncolor: "white" },
  { source: carousel4, buttonPosition: "rightTop", offerType: "FLAT", OfferOff: "20-40% OFF*", btnbg: "black", btncolor: "white" },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change to 10000 for every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotPress = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1 }}>
      <FadeInOutImage source={images[currentIndex].source} />
      <ShopButton
        navigation={navigation}
        position={images[currentIndex].buttonPosition}
        currentIndex={currentIndex}
        description={images[currentIndex].description}
        offerType={images[currentIndex].offerType}
        offerOff={images[currentIndex].OfferOff}
        btnbg={images[currentIndex].btnbg}
        btncolor={images[currentIndex].btncolor}
      />
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)} >
            <Dot active={index === currentIndex} />
          </TouchableOpacity>
        ))}
      </View>
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

export default Ads;
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  Pressable,
  useWindowDimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Svg, { Path } from "react-native-svg";
// transform: [{ skewY: '-20deg' }]
import Rectangle from "../../assets/images/Rectangle.png";
import spiralTop from "../../assets/images/spiralTop.png";
import splashh from "../../assets/splashh.png";
import spiralBottom from "../../assets/images/spiralBottom.png";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const windowWidth = useWindowDimensions().width;

  const handleNavigation = () => {
    if (phoneNumber.trim() !== "") {
      navigation.navigate("Verify");
    } else {
      navigation.navigate("HomeScreen"); // Navigate to Home if phone number is not entered
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: StatusBar.currentHeight, margin: 20 }}
    >
      <View
        style={{
          flex: 10,
          backgroundColor: "#212121",
          borderRadius: 20,
          paddingBottom: 20,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, height: hp("22%") }}>
            <Image source={spiralTop} style={{ width: 232, height: 232 }} />
          </View>
          <View style={{ flex: 1 }}>
            <Image
              source={splashh}
              style={{ width: 232, height: 232, alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              flex: 1,
              position: "relative",
            }}
          >
            <View style={{ paddingBottom: 50, marginTop: windowWidth > 500 ? 50 : 110 }}>
              <Text
                style={[
                  styles.welText,
                  { fontSize: windowWidth > 500 ? 50 : 30 },
                ]}
              >
                Welcome!
              </Text>
              <Text
                style={[
                  styles.LoginText,
                  { fontSize: windowWidth > 500 ? 40 : 20 },
                ]}
              >
                Please Login To Continue
              </Text>
            </View>
            <Image
              source={spiralBottom}
              style={{
                position: "absolute",
                right: 0,
                bottom: windowWidth > 500 ? -90 : 0,
                width: windowWidth > 500 ? 350 : 232,
                height: windowWidth > 500 ? 350 : 232,
              }}
            />

            <View
              style={{
                alignSelf: "center",
                flexDirection: "row",
                backgroundColor: "#fff",
                borderRadius: 7,
                position: "relative",
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 50,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRightWidth: 3,
                  borderColor: "#212121",
                  borderRadius: 7,
                  zIndex: 2,
                }}
              >
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                >
                  <Path
                    fill="#212121"
                    d="M19.51 16.02a3.5 3.5 0 0 1-3.08 3.48c-.14.01-.29.01-.43.01s-.29 0-.43-.01A15.991 15.991 0 0 1 0 3.51 3.511 3.511 0 0 1 4.597.173.01.01 0 0 1 4.6.18l2.07 4.85a3.5 3.5 0 0 1-2.08 1.82 11.945 11.945 0 0 0 8.08 8.07 3.473 3.473 0 0 1 1.83-2.07l4.83 2.06v.01a3.3 3.3 0 0 1 .18 1.1Z"
                  />
                </Svg>
              </View>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "margin"}
              >
                <TextInput
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  style={{
                    fontFamily: "Glory_500Medium",
                    fontSize: 22,
                    width: 300,
                    height: 50,
                    paddingLeft: 10,
                    backgroundColor: "#fff",
                    position: "relative",
                    left: -5,
                    borderTopRightRadius: 7,
                    borderBottomRightRadius: 7,
                    zIndex: 1,
                  }}
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </KeyboardAvoidingView>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingVertical: 10,
        }}
      >
        <Pressable style={styles.button} onPress={handleNavigation}>
          <Text style={[styles.buttonText, { fontFamily: "Glory_700Bold" }]}>
            {phoneNumber.trim() !== "" ? "Next" : "Skip"}
          </Text>
        </Pressable>
      </View>
      {/* <ScrollView style={styles.test}>
        <ImageBackground source={Rectangle} resizeMode="cover" style={styles.test1}><Text>Hellooo</Text></ImageBackground>
        <View style={{flex:1}}></View>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welText: {
    color: "#fff",
    fontFamily: "Glory_700Bold",
    textAlign: "center",
  },
  LoginText: {
    color: "#fff",
    fontFamily: "Glory_700Bold",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    width: 148,
    height: 50,
    elevation: 3,
    backgroundColor: "#212121",
  },
  buttonText: {
    fontSize: 23,
    color: "white",
    fontFamily: "Glory_700Bold",
  },
  // test: {
  //   flex:1,
  //   backgroundColor: "#fff",
  // },
  // test1:{
  //   width: wp('90%'),
  //   marginHorizontal: wp('5%'),
  //   height: hp('100%'),
  //   flex: 1,
  // }
});

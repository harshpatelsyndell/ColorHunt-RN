import React, { useState, useRef } from "react";
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
  Pressable,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import spiralTop from "../../assets/images/spiralTop.png";
import splashh from "../../assets/splashh.png";
import spiralBottom from "../../assets/images/spiralBottom.png";

export default function VerifyScreen() {
    const navigation = useNavigation();
  const [focusedInput, setFocusedInput] = useState(null);
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (index < otp.length - 1 && value) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index) => {
    if (!otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
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
            <View style={{ paddingBottom: 50, marginTop: 110 }}>
              <Text style={styles.welText}>Welcome!</Text>
              <Text style={styles.LoginText}>Please Login To Continue</Text>
            </View>
            <Image
              source={spiralBottom}
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: 232,
                height: 232,
              }}
            />

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "margin"}
            >
              <View
                style={{
                  alignSelf: "center",
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {otp.map((digit, index) => (
                  <TextInput
                    ref={(ref) => {
                      inputRefs.current[index] = ref;
                    }}
                    key={index}
                    style={[
                      styles.otpInput,
                      focusedInput === index && styles.focusedOtpInput,
                    ]}
                    maxLength={1}
                    keyboardType="numeric"
                    onFocus={() => setFocusedInput(index)}
                    onBlur={() => setFocusedInput(null)}
                    onChangeText={(value) => handleOtpChange(index, value)}
                    onKeyPress={({ nativeEvent }) => {
                        if (nativeEvent.key === "Backspace") {
                          handleBackspace(index);
                        }
                      }}
                    value={digit}
                    returnKeyType={index < otp.length - 1 ? 'next' : 'done'}
                    onSubmitEditing={() => {
                      if (index < otp.length - 1) {
                        inputRefs.current[index + 1]?.focus();
                      }
                    }}
                  />
                ))}
              </View>
            </KeyboardAvoidingView>
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
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Ads")}
        >
          <Text style={[styles.buttonText, { fontFamily: "Glory_700Bold" }]}>
            Verify
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welText: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "Glory_700Bold",
    textAlign: "center",
  },
  LoginText: {
    color: "#fff",
    fontSize: 20,
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
  otpInput: {
    width: 47,
    height: 50,
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 7,
    fontSize: 22,
    fontFamily: "Glory_500Medium",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  focusedOtpInput: {
    borderColor: "lightgreen",
  },
});

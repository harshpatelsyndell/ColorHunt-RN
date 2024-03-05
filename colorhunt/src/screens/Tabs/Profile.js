import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import profile2 from "../../../assets/images/profile2.png";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
// import Animated, { SlideInUp, SlideInDown } from "react-native-reanimated";
// import LoginScreen from "../LoginScreen";

const editProfileIcon = (
  <Svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M7.18705 2.97276L1.8192 8.33884L1.4682 9.53579L2.64119 9.19677L8.02686 3.81288L7.18705 2.97276ZM8.10288 2.05724L8.94268 2.89676L9.72547 2.11423C9.78114 2.05856 9.81241 1.98307 9.81241 1.90435C9.81241 1.82563 9.78114 1.75014 9.72547 1.69447L9.30497 1.27471C9.24928 1.21905 9.17376 1.18779 9.09502 1.18779C9.01628 1.18779 8.94076 1.21905 8.88507 1.27471L8.10347 2.05724H8.10288ZM10.1454 0.43518L10.5653 0.854943C10.8436 1.13329 11 1.51077 11 1.90435C11 2.29794 10.8436 2.67541 10.5653 2.95376L3.2648 10.2524L0.758461 10.9768C0.6563 11.0062 0.548104 11.0077 0.44517 10.9811C0.342236 10.9545 0.248338 10.9007 0.173278 10.8254C0.0982178 10.7501 0.0447485 10.6561 0.0184519 10.5531C-0.00784459 10.4501 -0.00600404 10.342 0.0237814 10.2399L0.764994 7.71365L8.04646 0.434586C8.3249 0.156321 8.70249 0 9.09621 0C9.48993 0 9.86752 0.156321 10.146 0.434586L10.1454 0.43518Z"
      fill="black"
    />
  </Svg>
);

const Profile = () => {
  const [name, setName] = useState("Harsh");
  const [address, setAddress] = useState(
    "Lorem ipsum, dolor sit amet consectetur, Nunc fringilla elit consectetur ligula feugiat"
  );
  const [number, setNumber] = useState("9090909090");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.popToTop();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        // entering={SlideInUp}
        // exiting={SlideInDown}

        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "#212121",
              justifyContent: "center",
              alignItems: "center",
              padding: 40,
            }}
          >
            <View style={{ position: "relative" }}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 100, height: 100 }}
                />
              ) : (
                <Image source={profile2} style={{ width: 100, height: 100 }} />
              )}
              <View
                style={{
                  backgroundColor: "white",
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                }}
              >
                <Text onPress={pickImage}>{editProfileIcon}</Text>
              </View>
            </View>
            <Text
              style={{
                fontFamily: "Glory_700Bold",
                fontSize: 18,
                color: "white",
                marginTop: 10,
              }}
            >
              Upload Image
            </Text>
          </View>
          <View style={{ flex: 1, margin: 20 }}>
            <View>
              <TextInput
                placeholder="Name"
                style={{
                  borderBottomWidth: 1,
                  fontFamily: "Glory_600SemiBold",
                  fontSize: 18,
                  color: "#00000080",
                }}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                placeholder="Address"
                multiline={true}
                numberOfLines={2}
                style={{
                  borderBottomWidth: 1,
                  fontFamily: "Glory_600SemiBold",
                  fontSize: 18,
                  marginVertical: 30,
                  color: "#00000080",
                }}
                value={address}
                onChangeText={setAddress}
              />
              <TextInput
                placeholder="Number"
                keyboardType="numeric"
                style={{
                  borderBottomWidth: 1,
                  fontFamily: "Glory_600SemiBold",
                  fontSize: 18,
                  color: "#00000080",
                }}
                value={number}
                onChangeText={setNumber}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 30,
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  placeholder="City"
                  style={{
                    borderBottomWidth: 1,
                    fontFamily: "Glory_600SemiBold",
                    fontSize: 18,
                    color: "#00000080",
                    width: "45%",
                  }}
                />
                <TextInput
                  placeholder="State"
                  style={{
                    borderBottomWidth: 1,
                    fontFamily: "Glory_600SemiBold",
                    fontSize: 18,
                    color: "#00000080",
                    width: "45%",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextInput
                  placeholder="Country"
                  style={{
                    borderBottomWidth: 1,
                    fontFamily: "Glory_600SemiBold",
                    fontSize: 18,
                    color: "#00000080",
                    width: "45%",
                  }}
                />
                <TextInput
                  placeholder="Pincode"
                  maxLength={6}
                  keyboardType="numeric"
                  style={{
                    borderBottomWidth: 1,
                    fontFamily: "Glory_600SemiBold",
                    fontSize: 18,
                    color: "#00000080",
                    width: "45%",
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View>
          <Pressable style={styles.button} onPress={handleLogout}>
            <Text style={[styles.buttonText, { fontFamily: "Glory_700Bold" }]}>
              Log Out
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "90%",
    height: 50,
    elevation: 3,
    backgroundColor: "#212121",
    marginHorizontal: "5%",
    marginVertical: "3%",
  },
  buttonText: {
    fontSize: 23,
    color: "white",
    fontFamily: "Glory_700Bold",
  },
});

export default Profile;

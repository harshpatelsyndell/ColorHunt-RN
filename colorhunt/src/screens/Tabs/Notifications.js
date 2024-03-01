import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import tshirt3 from "../../../assets/images/tshirt/tshirt3.png";

const Notifications = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* **********************1********************** */}
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", width: "81%", alignItems: "center" }}
        >
          <View style={{ position: "relative" }}>
            <Image
              source={tshirt3}
              style={{ width: 50, height: 50, borderRadius: 7 }}
            />
            <View
              style={{
                backgroundColor: "#FF4A4A",
                width: 8,
                height: 8,
                borderRadius: 100,
                position: "absolute",
                right: 0,
                top: 0,
              }}
            ></View>
          </View>
          <Text
            style={{
              fontFamily: "Glory_600SemiBold",
              fontSize: 14,
              width: "75%",
              marginLeft: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum
            elementum amet ornare id. Feugiat tempus.
          </Text>
        </View>
        <View style={{ width: "19%" }}>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Glory_500Medium",
              fontSize: 14,
              color: "#000",
            }}
          >
            1m ago.
          </Text>
        </View>
      </View>
      {/* **********************2********************** */}
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", width: "81%", alignItems: "center" }}
        >
          <View style={{ position: "relative" }}>
            <Image
              source={tshirt3}
              style={{ width: 50, height: 50, borderRadius: 7 }}
            />
            <View
              style={{
                backgroundColor: "#FF4A4A",
                width: 8,
                height: 8,
                borderRadius: 100,
                position: "absolute",
                right: 0,
                top: 0,
              }}
            ></View>
          </View>
          <Text
            style={{
              fontFamily: "Glory_600SemiBold",
              fontSize: 14,
              width: "75%",
              marginLeft: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum
            elementum amet ornare id. Feugiat tempus.
          </Text>
        </View>
        <View style={{ width: "19%" }}>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Glory_500Medium",
              fontSize: 14,
              color: "#000",
            }}
          >
            28m ago.
          </Text>
        </View>
      </View>
      {/* **********************3********************** */}
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", width: "81%", alignItems: "center" }}
        >
          <Image
            source={tshirt3}
            style={{ width: 50, height: 50, borderRadius: 7 }}
          />
          <Text
            style={{
              fontFamily: "Glory_400Regular",
              fontSize: 14,
              width: "75%",
              marginLeft: 20,
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Lacus pulvinar interdum
            elementum amet ornare id. Feugiat tempus.
          </Text>
        </View>
        <View style={{ width: "19%" }}>
          <Text
            style={{
              textAlign: "right",
              fontFamily: "Glory_500Medium",
              fontSize: 14,
              color: "#6C6C6C",
            }}
          >
            1h ago.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;

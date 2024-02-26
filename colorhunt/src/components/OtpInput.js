import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const OtpInput = ({ length, value, disabled, onChange }) => {
  const inputRefs = useRef([]);

  const onChangeValue = (text, index) => {
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }
      return item;
    });
    onChange(newValue);
  };

  const handleChange = (text, index) => {
    onChangeValue(text, value);
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }
    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (event, index) => {
    const { nativeEvent } = event;
    if (nativeEvent.key === "Backspace") {
      handleChange("", index);
    }
  };

  return (
    <View style={styles.container}>
      {[...new Array(length)].map((item, index) => {
        <TextInput
          ref={(ref) => {
            if (ref && !inputRefs.current.include(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          style={styles.input}
          maxLength={1}
          contexMenuHidden
          selectTextOnFocus
          editable={!disabled}
          keyboardType="numeric"
          testID={`OTPInput=${index}`}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleBackspace(event, index)}
        />;
      })}
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  container: {
    // width: wp("100%"),
    // flexDirection: "row",
    // justifyContent: "space-between",
    // backgroundColor: "#fff",
  },
  input: {
    // fontSize: 24,
    // color: "black",
    // textAlign: "center",
    // width: 45,
    // height: 55,
    // backgroundColor: "blue",
    // borderRadius: 7,
  },
});

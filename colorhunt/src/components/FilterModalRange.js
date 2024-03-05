import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

const cancelIcon = (
  <Svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12.7666 12.668L1.09934 1.00071"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M12.7666 1L1.09934 12.6673"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
  </Svg>
);

const FilterModalRange = ({ filterModel, closeBottomSheet }) => {
  const [values, setValues] = useState([100, 2000]);

  const multiSliderValuesChange = (values) => {
    setValues(values);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={filterModel}
      onRequestClose={closeBottomSheet}
    >
      <View style={styles.filterModalContainer}>
        <View style={styles.filterModal}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "Glory_700Bold", fontSize: 24 }}>
              Price Range
            </Text>
            <TouchableOpacity onPress={closeBottomSheet}>
              <View
                style={{
                  backgroundColor: "#212121",
                  color: "white",
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cancelIcon}
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <MultiSlider
              values={values}
              sliderLength={300}
              //   sliderLength={sliderWidth}
              onValuesChange={multiSliderValuesChange}
              min={100}
              max={2000}
              step={100}
              trackStyle={{ backgroundColor: "#212121" }}
              selectedStyle={{ backgroundColor: "#212121" }}
              markerStyle={{ backgroundColor: "#212121" }}
            />
            <Text>
              Range: {values[0]} - {values[1]}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 15,
            }}
          >
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "rgba(33, 33, 33, 1)",
                backgroundColor: "rgba(33, 33, 33, 1)",
                borderRadius: 7.6,
                width: 76,
                height: 38,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "Glory_600SemiBold",
                  color: "white",
                }}
              >
                Apply
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  filterModalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
  },
  filterModal: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    // alignItems: "center",
  },
  buttons: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "#212121",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterModalRange;

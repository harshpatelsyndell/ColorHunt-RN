import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { FilterCategories } from "../screens/Tabs/Constants";
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

const FilterModal = ({ filterModel, closeBottomSheet }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    }
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  console.log(selectedCategories);

  const [values, setValues] = useState([100, 2000]);

  const multiSliderValuesChange = (values) => {
    setValues(values);
  };

  //   const [sliderWidth, setSliderWidth] = useState(
  //     Dimensions.get("window").width - 80
  //   );

  //   useEffect(() => {
  //     const updateDimensions = () => {
  //       setSliderWidth(Dimensions.get("window").width - 80);
  //     };

  //     Dimensions.addEventListener("change", updateDimensions);

  //     return () => {
  //       Dimensions.removeEventListener("change", updateDimensions);
  //     };
  //   }, []);

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
              Categories
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
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 15,
              marginVertical: 15,
            }}
          >
            {FilterCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => toggleCategory(category)}
                style={[
                  styles.buttons,
                  {
                    backgroundColor: isCategorySelected(category)
                      ? "#212121"
                      : "transparent",
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: "Glory_500Medium",
                    color: isCategorySelected(category) ? "#fff" : "#000",
                  }}
                >
                  {category}
                </Text>
                <View
                  style={[
                    styles.checkbox,
                    {
                      backgroundColor: isCategorySelected(category)
                        ? "white"
                        : "white",
                    },
                    { borderWidth: isCategorySelected(category) ? 1 : 2 },
                  ]}
                >
                  <View
                    style={{
                      width: 14,
                      borderRadius: 100,
                      height: 14,
                      backgroundColor: isCategorySelected(category)
                        ? "#212121"
                        : "#fff",
                    }}
                  ></View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <Text style={{ fontSize: 24, fontFamily: "Glory_700Bold" }}>
              Price Range
            </Text>
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
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "rgba(33, 33, 33, 1)",
                borderRadius: 7.6,
                width: 76,
                height: 38,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setSelectedCategories([])}
            >
              <Text style={{ fontSize: 18, fontFamily: "Glory_600SemiBold" }}>
                Reset
              </Text>
            </Pressable>
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

export default FilterModal;

import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import profileImage from "../../assets/images/profile.png";

export const ProfileIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.profileIconContainer}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        source={profileImage}
        style={{ width: 35, height: 35, borderRadius: 100 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileIconContainer: {
    marginHorizontal: 10,
  },
});

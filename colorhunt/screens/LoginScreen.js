import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
// transform: [{ skewY: '-20deg' }]
export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex: 1, paddingVertical: StatusBar.currentHeight}}>
      <View style={{flex:1, backgroundColor: "#212121", margin: 20, borderRadius: 20}}>
      <Text>logo</Text>
      <Text style={styles.welText}>Welcome!</Text>
      <Text style={styles.LoginText}>Please Login To Continue</Text>
      </View>
      <View>
        <Text>Skip</Text>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  welText: {
    color: "#fff", fontSize: 30, fontFamily: "Glory_700Bold", textAlign: "center"
  },
  LoginText:{
    color: "#fff", fontSize: 20, fontFamily: "Glory_700Bold", textAlign: "center"
  }
})
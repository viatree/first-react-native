import React from "react";
import { StyleSheet, SafeAreaView,Button,Platform,StatusBar,View,Dimensions } from "react-native";

export default function App() {
  // console.log(Dimensions.get("screen"))
  return (
    <SafeAreaView style={styles.container}>
        <View style={{
            backgroundColor: 'dodgerblue',
            width: "100%",
            height: 70
        }}></View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})
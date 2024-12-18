import React from "react";
import { StyleSheet, SafeAreaView,Button,Platform,StatusBar,View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        {/* Density-Independent Pixels
            Physical Pixels = DIPs x Scale Factor */}
        <View style={{
            backgroundColor: 'dodgerblue',
            width: "150",
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
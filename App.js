import React from "react";
import { StyleSheet, SafeAreaView,Button } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor:"orange",}}>
      <Button title="Click Me" onPress={() => console.log("Button Clicked")} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
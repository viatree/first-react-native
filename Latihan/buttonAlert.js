import React from "react";
import { StyleSheet, SafeAreaView, Button, Alert,Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* alert default  */}
      <Button 
      color="orange"
      title="click me" onPress={() => Alert.alert("Button Tapped","tapped button test", [
        {text: "Yes", onPress: () => console.log("Yes")},
        {text: "No",  onPress: () => console.log("No")}
      ])}/>

      {/* Pada Alert.prompt hanya digunakkan untuk IOS */}
       {/* <Button 
      color="orange"
      title="click me" onPress={() => Alert.prompt("My title","My message", (text) => console.log(text) )}/> */}
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
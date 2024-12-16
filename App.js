import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View 
    style={{
      backgroundColor: "#fff",
      flex:1,
      flexDirection:"row", 
      justifyContent: "center", 
      alignItems:"center",
      alignContent:"center",
      flexWrap:"wrap"
    }}>
       <View
      style = {{
        backgroundColor: "dodgerblue",
        // flexBasis:100,
        // flexGrow:1,
        // flexShrink:1,
        // flex: -1,
        width:100,
        height:100,
        
      }}
      />
      <View
      style = {{
        backgroundColor: "gold",
        width:100,
        height:100,
        bottom:-20,
        top:20,
        left:20,
        position:"absolute"
      }}
      />
       <View
      style = {{
        backgroundColor: "tomato",
        width:100,
        height:100,
      }}
      />
    {/* <View
      style = {{
        backgroundColor: "grey",
        width:100,
        height:100,
      }}
      />
        <View
      style = {{
        backgroundColor: "greenyellow",
        width:100,
        height:100,
      }}
      /> */}
    </View>
  );
}
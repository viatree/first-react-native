import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,Image,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default function App() {
  return (
    // SafeAreaView digunakan sebagai div yang tidak menindih status bar tetapi tetap berada di atas.
    <SafeAreaView style={styles.container}>
      <Text >Hello React Native</Text>
      {/* TouchableWithoutFeedback tidak mengembalikan apapun hanya result ketika di click */}
      <TouchableWithoutFeedback onPress={() => console.log('Imagged Tapped')}>
      <Image 
      blurRadius={10} 
      // untuk membuat gambar blur
      fadeDuration={1000}
      // android user only, used to loads the image with a fade effect and by default this fade effect takes 300ms
      source={{
        width: 300,
        height: 300,
        uri : "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png",
      }}/>
      </TouchableWithoutFeedback>

      {/* Touchable Opacity mengembalikan effect hover/click mengikuti background ketika di click */}
     <TouchableOpacity onPress={() => console.log("Image Tapped")}>
     <Image 
      source={{
        width: 300,
        height: 300,
        uri : "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png",
      }}/>
     </TouchableOpacity>
        {/* Touchable Highlight mengembalikan effect background hitam ketika di click */}
        <TouchableHighlight onPress={() => console.log("Image Tapped")}>
     <Image 
      source={{
        width: 300,
        height: 300,
        uri : "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png",
      }}/>
     </TouchableHighlight>
           {/* Touchable Native feedback hanya untuk android user memberikan effect sentuhan  */}
           <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
     <View 
      style={{
        width: 300,
        height: 300,
       backgroundColor: "dodgerblue"
      }}/>
     </TouchableNativeFeedback>
            <Text numberOfLines={1} onPress={() => console.log("Text Clicked")} >Hello React Native - A really Really long text. now see what happend to this text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

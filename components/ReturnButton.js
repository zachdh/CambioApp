import React, { useState, useEffect } from 'react'
import {Text, Pressable, StyleSheet, Image} from 'react-native'

import * as Font from 'expo-font'

export default function returnButton(props){ 
  //async loading font
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Miltonian Tattoo': require('./../assets/fonts/MiltonianTattoo-Regular.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    loadFonts();
  }, []);

 if (!fontsLoaded) {
   // You can render a loading indicator or return null while the fonts are loading
   return null;
 }

  //customize pressable
  const { onPress, title= 'Play' } = props;
  return(
    <Pressable style={({ pressed }) => [styles.button, styles.shadowProp, { marginBottom : pressed ? 120 : 124 }, { shadowOffset: {width: 0, height : pressed ? 6 : 10}}]} onPress={(onPress)}>
        <Image source={require('./../assets/HomeButton.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      width: 300,
      height: 148,
      borderRadius: 30,
      backgroundColor: '#C3B994',
    },
});
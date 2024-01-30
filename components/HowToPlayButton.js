import React, {useState, useEffect} from 'react'
import {Text, Pressable, StyleSheet} from 'react-native'

import * as Font from 'expo-font'

export default function HowToPlayButton(props){ 
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
  const { onPress, title= 'How to Play' } = props;
    return(
      <Pressable style={[styles.button, styles.shadowProp]} onPress={(onPress)}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      marginBottom: 29,
      width: 300,
      height: 75,
      borderRadius: 30,
      backgroundColor: '#C3B994',
    },
    text: {
      fontSize: 40,
      alignSelf:'center',
      fontFamily: 'Miltonian Tattoo',
      paddingTop: 10,
      paddingBottom: 10,
      color: '#FAF9F6',
    },
    shadowProp: {
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 10},
      shadowOpacity: 0.5,
      shadowRadius: 3,
    },
});
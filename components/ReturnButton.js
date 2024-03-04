import React from 'react'
import {Text, Pressable, StyleSheet, Image} from 'react-native'

export default function returnButton(props){ 
  //customize pressable
  const { onPress, title= 'Play' } = props;
  return(
    <Pressable style={styles.button} onPress={(onPress)}>
        <Image style={styles.image} source={require('./../assets/HomeButton.png')}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
      zIndex: 1,
      position: 'absolute',
      alignSelf: 'left',
      marginLeft: 20,
      marginTop: 55,
    },
    image: {
      width: 40,
      height: 35,
    },
});
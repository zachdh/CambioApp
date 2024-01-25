import React from 'react'
import {Text, Pressable, StyleSheet} from 'react-native'

export default function PlayButton(props){ 

    const { onPress, title= 'Play' } = props;
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
      marginBottom: 118,
      width: 300,
      height: 148,
      borderRadius: 30,
      backgroundColor: '#C3B994',
    },
    text: {
      fontSize: 100,
      alignSelf:'center',
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
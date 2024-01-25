import React, {useState} from 'react'
import {Text, Pressable, StyleSheet} from 'react-native'

export default function PlayButton(props){ 

    const { onPress, title= 'Play' } = props;
    return(
      <Pressable style={styles.button} onPress={(onPress)}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      width: 300,
      height: 148,
      borderRadius: 30,
      backgroundColor: '#C3B994',
      flexShrink: 0,
    },
    text: {
      fontSize: 100,
      textAlign: 'center',
      color: 'black',
    },
});
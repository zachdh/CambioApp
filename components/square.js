import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import React, {useState, useEffect } from 'react'

export default function Square() {
    return( 
        <View style={styles.square} />
  )};
  
  const styles = StyleSheet.create({
    square: {
      width: 100,
      height: 100,
      backgroundColor: "red",
    },
  });
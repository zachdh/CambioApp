import React, { useState, useEffect }from 'react'
import {Text, Pressable, StyleSheet} from 'react-native'

export default function PlayingCards() {
    const fetchData = async() => {
        
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=18&difficulty=hard&type=multiple')
        const data = await response.json()
    }
    return(
        <Text>hello</Text>
    );
}
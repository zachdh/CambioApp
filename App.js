import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert} from 'react-native';

import React, {useState} from 'react'

// or any files within the Snack
import PlayButton from './components/PlayButton.js'
import HowToPlayButton from './components/HowToPlayButton.js';


export default function App() {

  const [name, setName] = useState('')

  const sayHi = () => {
    Alert.alert("Hi" + name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        style={styles.cambioTitle} 
        source={require('./assets/cambio_curved.png')} />
      <PlayButton/>
      <HowToPlayButton/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 8,
    backgroundColor: '#006E3B',
    minHeight: 150,
  },
  cambioTitle: {
    marginLeft: -15,
  },
});
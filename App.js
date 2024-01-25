import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert} from 'react-native';

import React, {useState} from 'react'

// or any files within the Snack
import AssetExample from './components/AssetExample';
import PlayButton from './components/PlayButton.js'

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
      <PlayButton></PlayButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    backgroundColor: '#006E3B'
  },
  cambioTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});
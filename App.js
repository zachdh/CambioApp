import { Text, SafeAreaView, StyleSheet, Image, Button, TextInput, Alert} from 'react-native';

import React, {useState} from 'react'

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Square from './components/square.js';

export default function App() {

  const [name, setName] = useState('')

  const sayHi = () => {
    Alert.alert("Hi" + name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.cambioTitle} source={require('./assets/cambio_curved.png')} />
      <Square>
        <Button style={styles.button} title = "Play!" />
      </Square>
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
    justifyContent: 'center',
    marginLeft: 100,
    width: 256,
    height: 128,
  },
  button: {
    border: 5,
    backgroundColor: 'beige'
  },
});
import { Text, View, SafeAreaView, StyleSheet, Image, Pressable, TextInput, Alert} from 'react-native';

import React, {useState} from 'react'

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  const [name, setName] = useState('')

  const sayHi = () => {
    Alert.alert("Hi" + name)
  }
  export default function Button(props)
  const { onPress, title= 'save' } = props

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.cambioTitle} source={require('./assets/cambio_curved.png')} />
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>Play</Text>
      </Pressable>
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#C3B994',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
import { Text, View, SafeAreaView, StyleSheet, Image, Pressable, TextInput, Alert} from 'react-native';

import React, {useState} from 'react'

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  const [name, setName] = useState('')

  const sayHi = () => {
    Alert.alert("Hi" + name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.cambioTitle} source={require('./assets/cambio_curved.png')} />
      <View style={styles.buttonBackground}>
        <Pressable style={styles.button}>
          <Text>Play</Text>
        </Pressable>
      </View>
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
    width: 300,
    height: 148,
    justifyItems: 'center',
    backgroundColor: '#C3B994',
    borderRadius: 30,
  },
});
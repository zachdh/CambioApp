import { Text, SafeAreaView, StyleSheet, Image, Button, TextInput, Alert} from 'react-native';

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

    <TextInput placeholder = "Enter your name" 
    onChangeText = {(text) => setName(text)} />

    <Button title = "Click Me!" onPress = {sayHi} />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

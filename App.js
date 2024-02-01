import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react'
import * as Font from 'expo-font'

// or any files within the Snack
import PlayButton from './components/PlayButton.js'
import HowToPlayButton from './components/HowToPlayButton.js';


export default function App() {
  //async loading font
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [name, setName] = useState('');
  
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'El Rio Lobo': require('./assets/fonts/El-RioLobo.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    loadFonts();
  }, []);

 if (!fontsLoaded) {
   // You can render a loading indicator or return null while the fonts are loading
   return null;
 }


  const sayHi = () => {
    Alert.alert("Hi" + name)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Cambio
      </Text>
      <Image style={styles.dancingCat}
        source={require('./assets/gifs/dancing_cat.gif')}/>
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
  title: {
    position: 'absolute',
    marginTop: 75,
    fontFamily: 'El Rio Lobo',
    color: 'white',
    alignSelf: 'center',
    fontSize: 115,
  },
  dancingCat: {
    position: 'absolute',
    marginTop: 240,
    alignSelf: 'center',
  },
});
//npx expo start, then press "i" to open the IOS simulator

import { Text, SafeAreaView, StyleSheet, Image, Button, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react'
import * as Font from 'expo-font'


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// or any files within the Snack
import PlayButton from './components/PlayButton.js'
import HowToPlayButton from './components/HowToPlayButton.js';
import ReturnButton from './components/ReturnButton.js'

function Home({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, styles.shadowProp, styles.r1]}>
        C
      </Text>
      <Text style={[styles.title, styles.shadowProp, styles.r2]}>
        a
      </Text>
      <Text style={[styles.title, styles.shadowProp, styles.r3]}>
        m
      </Text>
      <Text style={[styles.title, styles.shadowProp, styles.r4]}>
        b
      </Text>
      <Text style={[styles.title, styles.shadowProp, styles.r5]}>
        i
      </Text>
      <Text style={[styles.title, styles.shadowProp, styles. r6]}>
        o
      </Text>
      <Image 
        style={styles.banner}
        source={require('./assets/banner.png')} />
      <Image 
        style={styles.dancingCat}
        source={require('./assets/gifs/dancing_cat.gif')}/>
      <PlayButton onPress={() => navigation.navigate('Game')}/>
      <HowToPlayButton onPress={() => navigation.navigate('Rules')}/>
    </SafeAreaView>
  );
}

function Game({navigation}){
  return(
    <SafeAreaView>
      <Text style={{marginTop: 40}}>Explore page</Text>
      <ReturnButton onPress={() => navigation.navigate('Home')}></ReturnButton>
    </SafeAreaView>
  );
}

function Rules({navigation}){
  return(
    <SafeAreaView>
      <ReturnButton onPress={() => navigation.navigate('Home')}></ReturnButton>
      <ImageBackground source={require('./assets/rulesPage.png')} resizeMode="cover" style={styles.rulesPage} />
    </SafeAreaView>
  );
}

const Tab = createNativeStackNavigator();
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
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ animation: 'none' }}>
        <Tab.Screen name = "Home" options={{headerShown : false}} component = {Home} />
        <Tab.Screen name = "Game" options={{headerShown : false }} component = {Game} />
        <Tab.Screen name = "Rules" options={{headerShown : false }} component = {Rules} />
      </Tab.Navigator>
    </NavigationContainer>
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
  title: {
    position: 'absolute',
    fontFamily: 'El Rio Lobo',
    color: 'white',
    fontSize: 115,
  },
  dancingCat: {
    position: 'absolute',
    marginTop: 240,
    alignSelf: 'center',
  },
  rulesPage: {
    position: 'absolute',
    width: 400,
    height: 900,
    alignSelf: 'center',
  },
  banner: {
    position: 'absolute',
    width: 430,
    height: 256,
    alignSelf: 'center',
    marginTop: -40,
  },
  shadowProp: {
    textShadowColor: '#004927', 
    textShadowOffset: { width: 0, height: 10 },
    textShadowRadius: 1,
  },
  r1:{
    transform: [{rotate: '-25deg'}],
    marginTop: 170,
    marginLeft: 15,
  },
  r2:{
    transform: [{rotate: '-12deg'}],
    marginTop: 140,
    marginLeft: 65,
  },
  r3:{
    transform: [{rotate: '-4deg'}],
    marginTop: 125,
    marginLeft: 135,
  },
  r4:{
    transform: [{rotate: '5deg'}],
    marginTop: 130,
    marginLeft: 235,
  },
  r5:{
    transform: [{rotate: '20deg'}],
    marginTop: 140,
    marginLeft: 300,
  },
  r6:{
    transform: [{rotate: '20deg'}],
    marginTop: 170,
    marginLeft: 325,
  },
});

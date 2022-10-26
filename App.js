import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts }  from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

import Colors from './components/constants/colors';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(false);

  useFonts({});

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  }

  function StartNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={StartNewGameHandler} />
  }



  return (
    <>
      <StatusBar style='light' />
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.body}>
        <ImageBackground 
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.body}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});

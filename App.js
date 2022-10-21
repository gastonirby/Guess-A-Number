import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.body}>
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.body}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});

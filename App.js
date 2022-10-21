import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#3b021f', '#ddb52f']} style={styles.body}>
      <StartGameScreen />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    
  }
});

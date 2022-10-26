import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';


import Instruction from '../components/ui/Instruction';
import Title from '../components/ui/Title';
import Colors from '../components/constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    const { width, height } = useWindowDimensions();

    let imageSize = 300; 

    if (width < 300) {
        imageSize = 150;
    }

    if (height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer} >
                <Title>Game Over!</Title>
                <View style={[styles.imageContainer, imageStyle]} >
                    <Image 
                        style={styles.image}
                        source={require('../assets/images/success.png')} 
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone guessed the number <Text style={styles.hightlight}>{userNumber}</Text> in <Text style={styles.hightlight}>{roundsNumber}</Text> rounds
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24,
    },
    hightlight: {
        fontWeight: 'bold',
        color: Colors.primary500,
        fontSize: 24,
    }
});
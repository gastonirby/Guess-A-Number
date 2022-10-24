import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import Colors from '../components/constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import Instruction from '../components/ui/Instruction';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
            Alert.prompt(
                'Invalid number!',
                'Number has to be between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }] 
            );
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer} >
            <Title>Guess My Number</Title>
            <Card>
                <Instruction>Enter a Number</Instruction>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>   
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flex: 1
    }
});
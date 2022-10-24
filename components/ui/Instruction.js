import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function Instruction({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
};

export default Instruction;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
})
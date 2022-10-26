import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container} >
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 10,
        margin: deviceWidth < 380 ? 8 : 18,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold',
    }
})
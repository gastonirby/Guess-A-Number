import { Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';


function Title({children}) {
    return (
        <Text style={styles.title} >{children}</Text>
    )
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        // This is also a way of writing the above code:
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // OR different components can be made for both devices ex: 'Title.android.js & Title.ios.js
        borderColor: Colors.accent500,
        padding: 12,
        maxWidth: '80%',
        minWidth: '60%',
        width: 300,
    }
})
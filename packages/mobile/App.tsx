import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import sampleText from '../shared/SampleText';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>{sampleText()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
    },
});

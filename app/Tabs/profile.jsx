import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PROFILE</Text>
        </View>
    )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 20,
    },
    text: {
        color: '#00ffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})  
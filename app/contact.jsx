import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact</Text>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        color: "gray",
        marginBottom: 20,
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../components/themedView'
import ThemedText from '../components/themedText'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Contact</ThemedText>
        </ThemedView>
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
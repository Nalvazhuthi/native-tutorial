import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../components/themedView'
import ThemedText from '../components/themedText'

const About = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>About</ThemedText>
        </ThemedView>
    )
}

export default About

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
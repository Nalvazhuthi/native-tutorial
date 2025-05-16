import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
        </View>
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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Works = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Works</Text>
        </View>
    )
}

export default Works

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
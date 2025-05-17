import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedText from '../../components/themedText'
import ThemedView from '../../components/themedView'
import { Link } from 'expo-router'

const Register = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Register</ThemedText>
            <Link href='./login'>
                <ThemedText>Login</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})
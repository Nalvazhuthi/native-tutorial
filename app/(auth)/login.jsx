import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/themedView'
import ThemedText from '../../components/themedText'
import { Link } from 'expo-router'

const Login = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Login</ThemedText>

            <Link href='./register'>
                <ThemedText>Register</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})
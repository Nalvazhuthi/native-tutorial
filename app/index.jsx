import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import logo from '../assets/favicon.png'
import { useState } from 'react'
import { Colors } from '../constants/Color'
import ThemedView from '../components/themedView'
import ThemedText from '../components/themedText'
import ThemeToggle from '../components/themeToggle'
import { Link } from 'expo-router'
const Home = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <ThemedView style={styles.container}>
            <ThemeToggle />
            <ThemedView style={styles.headerWrapper}>
                <Image source={logo} />
                <ThemedText style={[styles.title, {}]}>Zentry</ThemedText>
            </ThemedView>
            <ThemedText style={[styles.label, { colo: theme.textColor }]}>Best Local Freelance App</ThemedText>

            <ThemedView style={styles.authWrapper}>
                <Link href='/login'>
                    <ThemedText style={styles.authText}>Login</ThemedText>
                </Link>
                <Link href='/register'>
                    <ThemedText style={styles.authText}>Register</ThemedText>
                </Link>
            </ThemedView>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },


    headerWrapper: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        color: "purple",
    },
    label: {
        color: "gray",
        fontSize: 20
    },

    authWrapper: {
        flexDirection: "row",
        gap: 12,
        marginTop: 20

    },
    authText: {
        fontSize: 18,
        paddingVertical: 15,
        paddingHorizontal: 20
    }

})

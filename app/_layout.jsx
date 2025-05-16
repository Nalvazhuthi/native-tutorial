import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack, usePathname } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

    return (
        <View style={styles.container}>
            <StatusBar value="auto" />
            <Stack
                screenOptions={{
                    headerTitle: '',
                }}
            />
            {/* <View style={styles.footer}>
                <Link style={styles.value} href="/" replace>Home</Link>
                <Link style={styles.value} href="/about" replace>About</Link>
                <Link style={styles.value} href="/works" replace>Works</Link>
                <Link style={styles.value} href="/contact" replace>Contact</Link>
            </View> */}
        </View>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        marginBottom: 20,
        width: "100%",
        backgroundColor: "gray",
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    value: {
        backgroundColor: "#ccc",
        paddingVertical: 20,
        paddingHorizontal: 15,
    }
})

// i am switching
// Home => About => Works => Contact => Works => About here it display contact page 
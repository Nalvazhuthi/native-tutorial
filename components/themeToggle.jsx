import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import ThemedView from './themedView'
import ThemedText from './themedText'

const ThemeToggle = () => {
    const [toogleView, setToogleView] = useState('light')

    return (
        <ThemedView style={styles.viewToogler}>
            <ThemedText style={[styles.view, toogleView === "light" && styles.activeView]} onPress={() => setToogleView("light")}>Light</ThemedText>
            <ThemedText style={[styles.view, toogleView === "dark" && styles.activeView]} onPress={() => setToogleView("dark")}>Dark</ThemedText>
        </ThemedView>
    )
}

export default ThemeToggle

const styles = StyleSheet.create({
    viewToogler: {
        backgroundColor: "gray",
        borderRadius: 12,
        position: "absolute",
        top: 10,
        right: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        gap: 12
    },
    view: {
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderRadius: 6,
    },
    activeView: {
        backgroundColor: 'black',
        color: '#ccc'
    },
})
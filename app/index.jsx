import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import logo from '../assets/favicon.png'
import { useState } from 'react'
import { Colors } from '../constants/Color'
const Home = () => {
    const [toogleView, setToogleView] = useState('light')
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <View style={[styles.viewToogler, { backgroundColor: theme.secondaryColor }]}>
                <Text style={[styles.view, toogleView === "light" && styles.activeView]} onPress={() => setToogleView("light")}>Light</Text>
                <Text style={[styles.view, toogleView === "dark" && styles.activeView]} onPress={() => setToogleView("dark")}>Dark</Text>
            </View>
            <View style={[styles.headerWrapper, { backgroundColor: theme.backgroundColor }]}>
                <Image source={logo} />
                <Text style={[styles.title, {}]}>Zentry</Text>
            </View>
            <Text style={[styles.label, { colo: theme.textColor }]}>Best Local Freelance App</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },

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
    headerWrapper: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 6
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        color: "purple",
        marginBottom: 20,
    },
    label: {
        color: "gray",
        fontSize: 20
    }

})

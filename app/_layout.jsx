import { StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import { Link, Stack, usePathname } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import ThemedView from '../components/themedView';
import { Colors } from '../constants/Color';
import ThemedText from '../components/themedText';

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    const path = usePathname()
    return (
        <ThemedView style={styles.container}>

            <StatusBar value="auto" />

            <Stack screenOptions={{ headerTitle: '' }} />

            {/* <ThemedView style={[styles.footer, { backgroundColor: theme.secondaryColor }]}>

                <Link href="/" replace>
                    <ThemedText style={[styles.value, path === '/' && { backgroundColor: theme.highlightButtonBackground, color: theme.highlightButtonText }, { color: theme.textColor }]} >Home</ThemedText>
                </Link>

                <Link href="/about" replace>
                    <ThemedText style={[styles.value, path === '/about' && { backgroundColor: theme.highlightButtonBackground, color: theme.highlightButtonText }, { color: theme.textColor }]} >About</ThemedText>
                </Link>

                <Link href="/works" replace>
                    <ThemedText style={[styles.value, path === '/works' && { backgroundColor: theme.highlightButtonBackground, color: theme.highlightButtonText }, { color: theme.textColor }]} >Works</ThemedText>
                </Link>

                <Link href="/contact" replace>
                    <ThemedText style={[styles.value, path === '/contact' && { backgroundColor: theme.highlightButtonBackground, color: theme.highlightButtonText }, { color: theme.textColor }]} >Contact</ThemedText>
                </Link>

            </ThemedView> */}

        </ThemedView>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        marginBottom: 20,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 100,
        marginHorizontal: 30

    },
    value: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 16,
        borderRadius: 100,
    },
});

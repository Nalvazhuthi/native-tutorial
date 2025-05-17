import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Color'

const ThemedText = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <Text style={[{ color: theme.textColor }, style]} {...props} />
    )
}

export default ThemedText

const styles = StyleSheet.create({})
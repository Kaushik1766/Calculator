import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './Button'

export default function ButtonRow({ A, B, C, D }) {
    return (
        <View style={styles.Row}>
            <Button name={A} />
            <Button name={B} />
            <Button name={C} />
            <Button name={D} />
        </View>
    )
}

const styles = StyleSheet.create({
    Row: {
        flex: 1,
        flexDirection: 'row'
    }
})
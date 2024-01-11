import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './BasicButton'
import BasicButton from './BasicButton'

export default function ButtonRow({ A, B, C, D }) {
    return (
        <View style={styles.Row}>
            <BasicButton name={A} />
            <BasicButton name={B} />
            <BasicButton name={C} />
            <BasicButton name={D} />
        </View>
    )
}

const styles = StyleSheet.create({
    Row: {
        flex: 1,
        flexDirection: 'row'
    }
})
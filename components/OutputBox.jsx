import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function OutputBox() {
    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'red',
            padding: '2%'
        }}>
            <Text style={styles.outputBox} >OutputBox</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    outputBox: {
        color: 'white',
        textAlign: 'right',
        fontSize: 18
    }
})
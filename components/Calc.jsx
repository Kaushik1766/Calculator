import { Text, StyleSheet, View, TouchableHighlight } from 'react-native'
import React, { Component } from 'react'
import { clear, add } from './features/inputQueue'
import { useDispatch } from 'react-redux'

export default function Calc({ content }) {
    const dispatch = useDispatch()
    return (
        <TouchableHighlight onPress={() => {
            console.log('hi')
            dispatch(clear())
            dispatch(add(content.split('=')[0]))
        }} underlayColor={'grey'}>
            <View style={{ flex: 1 }}>
                <Text style={styles.calc} >{content}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    calc: {
        color: 'grey',
        width: '100%',
        height: 'auto',
        textAlign: 'right',
        fontSize: 20,
    }
})
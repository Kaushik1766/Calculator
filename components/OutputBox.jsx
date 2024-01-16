import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'

export default function OutputBox() {
    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'red',
            padding: '2%'
        }}>
            <Text style={styles.outputBox} >{(useSelector(state => state.inputQueue.value)).split(',')}</Text>
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
import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import OutputBox from './OutputBox'
import HistoryBox from './HistoryBox'

export default function Display() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black'
        }}>
            {/* <Text>hello</Text> */}
            <HistoryBox></HistoryBox>
            <OutputBox></OutputBox>
        </View>
    )
}
const styles = StyleSheet.create(
    {
        background: {
            color: 'red'
        },
        displayBox: {
            backgroundColor: 'black',
        }
    }
)

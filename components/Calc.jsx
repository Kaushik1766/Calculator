import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Calc extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.calc} >Calc</Text>
            </View>
        )
    }
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
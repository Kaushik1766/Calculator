import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class Display extends Component {
    render() {
        return (
            <View style={{
                height: '100%',
            }}>
                <View style={styles.displayBox}>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        background: {
            color: 'red'
        },
        displayBox: {
            backgroundColor: 'powderblue',
            height: '50%',
            width: '100%',
            borderColor: 'red'
        }
    }
)
export default Display
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button(props) {
    if (props.name == '=') {
        return (
            <View style={styles.EqualButton}>
                <Text style={styles.ButtonText} >{props.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.Button}>
            <Text style={styles.ButtonText} >{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonText: {
        color: 'white',
        textAlign: 'center',
    },
    EqualButton: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '.25%',
        borderRadius: 30,
        overflow: 'hidden'
    },
    Button: {
        flex: 1,
        backgroundColor: 'black',
        // borderWidth: 5,
        // borderBlockColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '.25%'
    }
})
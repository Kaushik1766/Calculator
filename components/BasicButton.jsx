import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BasicButton(props) {
    if (props.name == '=') {
        return (
            <View style={{ borderRadius: 60, overflow: 'hidden', flex: 1 }}>
                <TouchableNativeFeedback style={styles.roundEdges}>
                    <View style={styles.EqualButton}>
                        <Text style={styles.ButtonText} >{props.name}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        )
    }
    return (
        <View style={{ borderRadius: 30, overflow: 'hidden', flex: 1 }}>
            <TouchableNativeFeedback style={styles.roundEdges}>
                <View style={styles.Button}>
                    <Text style={styles.ButtonText} >{props.name}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    EqualButton: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: '.25%',
        // borderRadius: 30
    },
    Button: {
        flex: 1,
        backgroundColor: 'black',
        // borderWidth: 5,
        // borderBlockColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        // margin: '.25%',

    },
    roundEdges: {
        flex: 1,
        // borderRadius: 30,
        overflow: 'hidden',
        // backgroundColor: 'white'
    }
})
import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { inputValue, inputV } from './features/inputSlice'

export default function BasicButton(props) {
    if (props.name == '=') {
        return (
            <View style={styles.roundEdges}>
                <TouchableNativeFeedback>
                    <View style={styles.EqualButton}>
                        <Text style={styles.ButtonText} >{props.name}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

        )
    }
    const dispatch = useDispatch()
    function handlePress() {
        // dispatch(inputV())
    }
    return (
        <View style={styles.roundEdges}>
            <TouchableNativeFeedback onPress={handlePress} >
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
        borderRadius: 30,
        overflow: 'hidden',
        flex: 1,
        margin: '1%'
    }
})
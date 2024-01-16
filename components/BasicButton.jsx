import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inputValue, resetValue } from './features/inputSlice'
import { add, backspace, clear, push } from './features/inputQueue'

export default function BasicButton(props) {
    const dispatch = useDispatch()
    const expression = useSelector(state => state.input.value)
    const inpQ = useSelector(state => state.inputQueue.value)

    function handlePress() {
        if (props.name == 'AC') { //for AC
            dispatch(resetValue())
            dispatch(clear())
        }
        else if (props.name == '<-') { //for backspace <-
            dispatch(backspace())
        }
        else if (props.name == '=') { //for =
            let output = 0
            let inputs = inpQ.split(',')
            let op1 = parseFloat(inputs[0])
            for (let i = 0; i < inputs.length - 2; i += 2) {
                let operator = inputs[i + 1]
                let op2 = parseFloat(inputs[i + 2])
                switch (operator) {
                    case '+':
                        output = op1 + op2
                        break
                    case '-':
                        output = op1 - op2
                        break
                    case '/':
                        output = op1 / op2
                        break
                    case 'X':
                        output = op1 * op2
                        break
                    case '%':
                        output = op1 % op2
                        break


                }
                op1 = output
            }
            dispatch(clear())
            dispatch(add(output))

        }
        else if (props.name == '#') {
            console.log(inpQ)
        }
        else if (!parseInt(props.name) && props.name != '.' && props.name != '0') { //for operator
            console.log(props.name);
            // dispatch(add(expression))
            // dispatch(add(props.name))
            // dispatch(resetValue())
            dispatch(push(props.name + ','))

        }
        else { //for number
            // dispatch(inputValue(props.name))
            dispatch(add(props.name))
        }
        console.log(inpQ);
    }
    if (props.name == '=') {
        return (
            <View style={styles.roundEdges}>
                <TouchableNativeFeedback onPress={handlePress}>
                    <View style={styles.EqualButton}>
                        <Text style={styles.ButtonText} >{props.name}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
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
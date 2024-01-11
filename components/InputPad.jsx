import { Text, View } from 'react-native'
import React from 'react'
import Button from './BasicButton'
import ButtonRow from './ButtonRow'

export default function InputPad() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'black',
        }}>
            <ButtonRow A='AC' B='<-' C='%' D='/' />
            <ButtonRow A='7' B='8' C='9' D='X' />
            <ButtonRow A='4' B='5' C='6' D='-' />
            <ButtonRow A='1' B='2' C='3' D='+' />
            <ButtonRow A='#' B='0' C='.' D='=' />
        </View>
    )
}


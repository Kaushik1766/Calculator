import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { Appearance } from 'react-native'
import Display from './components/Display'
import InputPad from './components/InputPad'

const App = () => {
    const [value, upateValue] = useState('')

    function handleChange(e) {
        console.log(e.target.value);
    }
    return (
        <View style={{
            flex: 1
        }}>
            <Display />
            <InputPad />
        </View>)
}

export default App
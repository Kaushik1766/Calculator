import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { Appearance } from 'react-native'
import Display from './components/Display'
import InputPad from './components/InputPad'
import { Provider } from 'react-redux'
import store from './components/store'

const App = () => {
    const [value, upateValue] = useState('')

    function handleChange(e) {
        console.log(e.target.value);
    }
    return (
        <Provider store={store}>
            <View style={{
                flex: 1
            }}>
                <Display />
                <InputPad />
            </View>
        </Provider>
    )
}

export default App
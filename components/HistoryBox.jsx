import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Calc from './Calc'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'

export default function HistoryBox() {
    const history = useSelector(state => state.historyArray.value)
    console.log(history);
    return (
        <View style={{
            flex: 6,
            // backgroundColor: 'green',
            paddingRight: 10
        }}>
            <ScrollView style={{ flex: 1 }}>
                {
                    history.map((val, idx) => {
                        return (<Calc content={val} />)
                    })
                }
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

})
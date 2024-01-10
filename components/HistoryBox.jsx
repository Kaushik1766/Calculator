import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Calc from './Calc'

export default function HistoryBox() {
    return (
        <View style={{
            flex: 6,
            // backgroundColor: 'green',
            paddingRight: 10
        }}>
            <ScrollView style={{ flex: 1 }}>
                <Calc />
                <Calc />
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
                <Calc></Calc>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

})
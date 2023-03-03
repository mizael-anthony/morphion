import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Calculatrice from './Calculatrice'

export default class App extends React.Component {

    render() {
        return ( 
            <View style = { styles.container } >
            <Text style = { styles.text }>Calculatrice</Text>
                <Calculatrice/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize: 40,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
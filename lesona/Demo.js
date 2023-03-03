import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'

class CompteurPopcorn extends React.Component {
    constructor() {
        super();
        this.state = {
            popcorns: 0,
            dada: ";-)",
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let popcorns = this.state.popcorns;
        console.log(this.state);
        return (
            <div>
                <h3>Nombre de popcorns : {popcorns}</h3>
                <button onClick={this.handleClick}>Ajouter {this.state.dada}</button>
            </div>
        )
    }

    /**
     * Augmente de 1 notre state de popcorns
     */
    handleClick() {
        this.setState({ // Bien
            popcorns: this.state.popcorns + 1,
        })
    }
}

// Création de composant en créant des classes
class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Bonjour</h1>
                <CompteurPopcorn/>
            </div>
        )
    }
}

export default Hello

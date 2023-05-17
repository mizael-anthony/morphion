import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'

class CompteurPopcorn extends React.Component {
    constructor() {
        super();
        this.state = {
            popcorns: 0,
            dada: ";-)",
        }
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickSou = this.handleClickSou.bind(this)
    }

    render() {
        let popcorns = this.state.popcorns;
        console.log(this.state);
        return (
            <div>
                <h3>Nombre de popcorns : {popcorns}</h3>
                <button onClick={this.handleClickAdd}>Ajouter {this.state.dada}</button>
                <button onClick={this.handleClickSou}>Soustraire {this.state.dada}</button>
                <button onClick={() => {this.handleClickMult()}}>Multiplier {this.state.dada}</button>
                <button onClick={this.handleClick}>Alert {this.state.dada}</button>

            </div>
        )
    }

    /**
     * Augmente de 1 notre state de popcorns
     */
    handleClickAdd() {
        this.setState({ // Bien
            popcorns: this.state.popcorns + 1,
        })
    }

    /**
     * Diminuer de 1 notre state de popcorns
     */
    handleClickSou() {
        this.setState({ // Bien
            popcorns: (this.state.popcorns === 0)? 0:this.state.popcorns - 1,
        })
    }

    handleClickMult(){
        this.setState({ // Bien
            popcorns: this.state.popcorns * 2,
        })
    }

    handleClick = () => {
        alert("mande")
    }


}



export default CompteurPopcorn

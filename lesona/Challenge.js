import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animaux: [
                {
                    name: "nom 1",
                    type: "typ 1"
                },
                {
                    name: "nom 2",
                    type: "typ 2"
                }
            ],
            newAnimalType: "",
            newAnimalName: "",
        }

        this.handleAnimalNameChange = this.handleAnimalNameChange.bind(this);
        this.handleAnimalTypeChange = this.handleAnimalTypeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Nom de l'animal
                        <input type="text" value={this.state.newAnimalName}
                                onChange={this.handleAnimalNameChange}/>
                    </label> <br/>
                    <label>
                        Type de l'animal
                        <input type="text" value={this.state.newAnimalType}
                                onChange={this.handleAnimalTypeChange}/>
                    </label><br/>
                    <button>Sauvegarder</button>
                </form>
                //map : mitraite valeur anah tableau
                {this.state.animaux.map((animal, index) => (
                    <div key={index}>
                        <p> {animal.name} - {animal.type}</p>
                    </div>
                ))}
                <p>  {this.state.newAnimalName} -  {this.state.newAnimalType} </p>
            </div>
        )
    }

    /**
     * Mettre à jour le state avec la nouvelle valeur du nom de l'animal
     */
    handleAnimalNameChange(event) {
        this.setState({
            newAnimalName: event.target.value
        })
    }

    /**
     * Mettre à jour le state avec la nouvelle valeur du type de l'animal
     * @param event Event contient la nouvelle valeur
     */
    handleAnimalTypeChange(event) {
        this.setState({
            newAnimalType: event.target.value
        })
    }

    /**
     * Afficher le contenu des deux champs
     * @param event Event événement de soumission du formulaire
     */
    handleSubmit(event) {
        event.preventDefault();
        const animaux = this.state.animaux;

        const name = this.state.newAnimalName;
        const type = this.state.newAnimalType;
        const newAnimal = {
            name,
            type,
        };
        animaux.push(newAnimal)

        this.setState({
            animaux,
        })
    }
}

export default Hello

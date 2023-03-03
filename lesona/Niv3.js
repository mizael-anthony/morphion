import React, { Component } from "react";

class Hello extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            texteExemple: "test",
            texte: "ESSAI",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.texteExemple} onChange={this.handleChange}/>
                    <p>Voici sa valeur {this.state.texteExemple}</p>
                </div>
                <div>
                    <p>
                    <input type="text" value={this.state.texte} onChange={this.handleTextChange}/>
                    </p>la valeur de texte est : {this.state.texte}
                </div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({
            texteExemple: event.target.value,
        })
    }

    /**
     * Gère le changement de l'input et met à jour le state texte avec la nouvelle valeur
     */
    handleTextChange(event) {
        this.setState({
            texte: event.target.value,
        })
    }
}

export default Hello
import React, { Component } from "react";

class Hello extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
        text: "",
      };

      this.incrementCounter = this.incrementCounter.bind(this);
      this.decrementCounter = this.decrementCounter.bind(this);
      this.remplacerParBaba = this.remplacerParBaba.bind(this);
    }

    render() {
      return (
        <div className="heading">
            <div>
                <p>Voici un élément Compteur </p>
                <h2>Compteur : {this.state.counter}</h2>
                <button onClick={this.incrementCounter}>Ajouter + 1</button>
            </div>
            <div>
                <button onClick={this.decrementCounter}>Retirer - 1</button>
            </div>
            <div>
                <button onClick={this.remplacerParBaba}>Ajouter Ba</button>
                <h2>{this.state.text}</h2>
            </div>
        </div>
      )
    }

    /**
     * Incrémente la valeur du compteur du state
     */
    incrementCounter() {
      this.setState({
        counter: this.state.counter + 1,
      })
    }

    /**
     * Décrémente la valeur du compteur du state
     */
    decrementCounter() {
      this.setState({
        counter: this.state.counter - 1,
      })
    }

    /**
     * Remplace la valeur de text par "Baba"
     */
    remplacerParBaba() {
      this.setState({
        text: this.state.text + "ba",
      })
    }
}

export default Hello
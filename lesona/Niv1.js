import React, { Component } from "react";

class Hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nom: "Bob",
        chat: {
          name: "Tokyo hotel",
          age: 18,
        },
        song: "La mère patrie",
        nombreDeBananes: 59,
      }
    }

    render() {
      const {chat, nom} = this.state;
      console.log(chat)
      console.log(nom)

      return (
        <div className="heading">
          <p>Le nom du state est {nom}</p>
          <p>La propriété chat du state avec ses attributs {chat.name} - {chat.age}</p>
          <div>
            <h2>Le chat est à {this.state.chat.name} - {this.state.chat.age}</h2>
          </div>
          <p>Le song dans le state :  {this.state.song}</p>
          <p>Le nombreDeBananes dans le state : {this.state.nombreDeBananes}</p>
        </div>
      )
    }
  }

export default Hello
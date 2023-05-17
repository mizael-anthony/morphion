import React from 'react'
import { StyleSheet, View, Button, TextInput, Text, Image } from 'react-native'

/**
 * render : méthode retournant un rendu (obligatoire)
 * refa mapiditra image de mila asina width sy height
 */

class Number extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            inputNumber: 0
        }
    }

    _showNumber(){
        alert(this.state.inputNumber)
    }

    _inputNumberChange(number){
        if(isNaN(number)){
            this.setState({ inputNumber: "Ce n'est pas un nombre"})
        }

        else{
            this.setState({ inputNumber: parseInt(number) })
        }
    }


    render(){
        return(
            <View style={styles.maincontainer}>
                
                <Image style={{width: 50, height: 50}} source={require('../img/garcon.png')}/>
                
                <Text style={styles.textinput2}>Salut le monde</Text>

                <TextInput style={[styles.textinput, styles.textinput2]} placeholder="Entrer un nombre"
                 onChangeText={(number) => {this._inputNumberChange(number)}}/>
                
                <Button title='OK' color='#059' 
                 onPress={() => {this._showNumber()}} />

                 
            </View>


        )
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        margin: 10,
        padding: 10

    },


    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        height: 50,
        borderColor: '#999',
        borderWidth: 1,
        paddingLeft: 5
    },

    textinput2:{
        fontFamily: 'casual',
        fontSize: 20,
        color: '#059'
    },



})


export default Number // Exporter la classe 



import React from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

/**
 * render : méthode retournant un rendu (obligatoire)
 */

class Search extends React.Component{
    render(){
        return(
            <View style={styles.maincontainer}>
                <TextInput style={[styles.textinput, styles.textinput2]} placeholder="Titre du film" />
                <Button title='RECHERCHER' color='#909' onPress={() => {}} />
            </View>


        )
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        margin: 10,
        padding: 10,
        flex: 1,

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
        color: '#f00'
    },



})


export default Search // Exporter la classe 



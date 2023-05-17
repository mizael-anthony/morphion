import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native'

class Form extends Component {
   state = {
      name : '',
   }
   updateState = (value) => this.setState({name : value})
   render() {
      return (
         <View style={styles.body}>
            <Text style={styles.text}>
               Entrer votre nom :
            </Text>
            <TextInput style={styles.input} 
               placeholder='votre nom svp?'
               onChangeText={this.updateState}>
            </TextInput>
            <Button
               title='submit'
            ></Button>
            <Text style={styles.text}>
               votre nom est : {this.state.name}
            </Text>
         </View>
      )
   }
}

export default Form

const styles = StyleSheet.create ({
   body: {
      flex: 1,
      backgroundColor: '#999900',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c',
      fontSize: 20,
      margin: 10,
   },
   input: {
      width: 200,
      borderWidth: 1,
      borderRadius:10,
      borderColor: '#55ff00',
      textAlign: 'center',
      backgroundColor: '#ff1111',
      fontSize: 20,
      marginBottom: 10,
   }
})

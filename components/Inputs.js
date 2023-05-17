import React from "react"
import
{
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
    Text,

}from "react-native"




class Inputs extends React.Component{
    state = {
       email: '',
       password: '',
       number: '',
 
    }
    handleEmail = (text) => {
       this.setState({ email: text})
    }
    handlePassword = (text) => {
       this.setState({ password: text})
    }
    handleNumber = (text) => {
      this.setState({ number: text})
   }
    login = (email,pass, num) => {
      alert('email: '+ email + '\npassword: ' + pass + '\nnuméro: ' + num)
      console.error("mande"); // Am téléphone ihany vao mande

    }
    render(){
       return(
          <View style = {styles.container}> 
          <TextInput style = {styles.input} 
             underlineColorAndroid = "black" 
             placeholder = "Email" 
             placeholderTextColor = "#9a73ef" 
             editable = {false}
             autoCapitalize = "none" 
             onChangeText = {this.handleEmail}/> 
 
          <TextInput style = {styles.input} 
                underlineColorAndroid = "black" 
                placeholder = "Password" 
                placeholderTextColor = "#9a73ef" 
                autoCapitalize = "none" 
                secureTextEntry = {true}
                onChangeText = {this.handlePassword}/> 
 
 
            <TextInput style = {styles.input} 
                underlineColorAndroid = "black" 
                placeholder = "Numéro" 
                placeholderTextColor = "#9a73ef" 
                autoCapitalize = "none" 
                keyboardType = 'numeric'
                onChangeText = {this.handleNumber}/> 

          <TouchableOpacity 
                style = {styles.submitButton} 
                onPress = { 
                   () => this.login(this.state.email, this.state.password, this.state.number) 
                }> 
                <Text style = {styles.submitButtonText}> Submit </Text> 
            </TouchableOpacity> 
 
             </View> 
       ) 
    }
 }
 export default Inputs
 
 const styles = StyleSheet.create({ 
    container: { 
       paddingTop: 23 
    }, 
    input: { 
       margin: 15, 
       height: 40, 
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4', 
       padding: 10, 
       margin: 15, 
       height: 40, 
    } ,
 
    submitButtonText:{ 
        color: 'white' 
    } 
 }) 
 
 
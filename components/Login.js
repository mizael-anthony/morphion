import React from "react"
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text
} from "react-native"



class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email : '',
            password : ''
        }

    }

    _handleEmail(_email){
        this.setState({email : _email})
    }

    _handlePassword(_password){
        this.setState({password : _password})
    }

    _showInfo(){
        alert("Email : " + this.state.email + "\n" + "Password : " + this.state.password)
    }


    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder = "Email"
                    placeholderTextColor = "#444"
                    onChangeText = {(value)=>{this._handleEmail(value)}}
                />
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholder = "Password"
                    placeholderTextColor = "#444"
                    onChangeText = {(value)=>{this._handlePassword(value)}}
                />

                <TouchableOpacity style={styles.loginButton}
                onPress = {this.props.onLoginPress}>
        
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>


            </View>
        )
    }

}


const styles = StyleSheet.create({
    container : {
        padding : 20,
    },
    input : {
        margin : 15,
        height : 40,
        borderColor : '#059',
        borderWidth : 1,
    },
    loginButton : {
        backgroundColor : '#059',
        padding : 10,
        margin : 15,
        height : 40,
        textAlign : 'center'
    },
    loginText : {
        color : '#FFF',
    }

})



export default Login

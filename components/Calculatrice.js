import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,



} from 'react-native'



class Calculatrice extends React.Component {

    buttons = [
        { key: 'C' },
        { key: 'S' },
        { key: '(' },
        { key: ')' },
        { key: 7 },
        { key: 8 },
        { key: 9 },
        { key: '/' },
        { key: 4 },
        { key: 5 },
        { key: 6 },
        { key: '*' },
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: '-' },
        { key: 0 },
        { key: '.' },
        { key: '=' },
        { key: '+' },

    ]



    constructor(props) {
        super(props)
        this.state = {
            input : '',
            error : false
            
            
        }




    }



    _calculate(_expression){

        let number = _expression
        try{

            number = eval(number)
            if(!isFinite(number)){
                number = this.state.input
                throw new Exception()
            }
            this.setState({error: false})

                

        }catch(e){
            this.setState({error: true})
            console.warn('Jereo tsara fa misy diso ilay izy eh !')
            
        }

        return number

    }

    _setResult1(_input){
        let _value = this.state.input
        switch (_input) {
            case 'C':
                _value = ''
                break

            case 'S':
                // alert("mande")
                this._checkError()
                _value = _value.replace(_value.charAt(_value.length - 1), '')
                break

            case '=':
                _value = this._calculate(_value)
                break

            
            default:
                this._checkError()
                _value += _input
                break
        }
        this.setState({input : _value.toString()})


    }

    _checkError(){
        if(this.state.error){
            this.setState({error : false})
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <TextInput
                        style={[styles.textinput, {color : (this.state.error) ? 'red':'#000'}]}
                        placeholder='0'
                        keyboardType='phone-pad'
                        value={this.state.input}
                        onChangeText={() => {this._checkError()}}



                    />

                    <FlatList
                        numColumns={4}
                        data={this.buttons}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => { this._setResult1(item.key) }}
                            >

                                <Text
                                    style={styles.text}
                                >
                                    {item.key}
                                </Text>
                            </TouchableOpacity>

                        }
                    />

                </View>



            </View>
        )
    }




}


const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',

    },

    textinput: {
        width: 260,
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 5,

    },

    text: {
        textAlign: 'center',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#000'

    },

    button: {
        margin: 10,
        width: 50,
        backgroundColor: '#09A',
        borderRadius: 5,
        borderWidth: 1,
    }

})


export default Calculatrice
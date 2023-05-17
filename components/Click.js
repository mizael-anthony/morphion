import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'


class Click extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            number : 0
        }


    }
    
    _add(_number){
        this.setState({number : ++_number})
    }

    _sou(_number){
        this.setState({number : (_number === 0)? 0:--_number})
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>{this.state.number}</Text>
                    <Button color='#F00' onPress={() => {this._sou(this.state.number)}} title='SOU' />
                    <Button color='#00F' onPress={() => {this._add(this.state.number)}} title='ADD' />
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#059',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    subContainer : {
        flexDirection : 'row',
    },

    text: {
        fontSize : 50,
        

    },

    button: {
        fontSize: 50,
        

    }


})




export default Click
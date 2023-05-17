import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    FlatList,

} from 'react-native'



export default class Field extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            valeur: [
                { key: 0, value: '' },
                { key: 1, value: '' },
                { key: 2, value: '' },
                { key: 3, value: '' },
                { key: 4, value: '' },
                { key: 5, value: '' },
                { key: 6, value: '' },
                { key: 7, value: '' },
                { key: 8, value: '' }
            ],

            player: ""
        }
    }

    _setValue = (item) => {
        let valeur = [...this.state.valeur]
        // console.log(_valeur[item.key]);
        valeur[item.key] = {...valeur[item.key], value : "x"}
        // console.log(_valeur[item.key].value);
        console.log(valeur);
        this.setState({valeur})
        
        
    }


    _design = (item) => {
        

        return (
            <View style={styles.line}>
                <TouchableOpacity
                    style={styles.container}
                    onPress={() => {this._setValue(item)}}
                >
                    <Text
                        style={styles.text}
                    >
                        {item.value}

                    </Text>


                </TouchableOpacity>
            </View>
        )
    }







    render() {
        return (
            <View>
                <Button />
                <FlatList
                    data={this.state.valeur}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return this._design(item)
                    }}

                    keyExtractor={(item) => item.key}


                />




            </View>
        )
    }
}

const styles = StyleSheet.create({
    start: {
        marginBottom: 100
    },
    line: {
        flexDirection: 'row'
    },
    container: {
        backgroundColor: '#09A',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },

    text: {
        textAlign: 'center',
        fontSize: 50,
        color: '#FFF'
    }

})
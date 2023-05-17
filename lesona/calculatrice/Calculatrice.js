import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Calculatrice extends Component {
    state = {
        display: '',
        egale: false,
    }
    _handlClick(btnVal) {
        let result = this.state.display;

        if (btnVal === '=') {
            this.setState({ egale: true })
            result = String(eval(result))

        } else if (btnVal === 'C') {
            result = '';
        } else {
            result += btnVal;
        }

        this.setState({ display: result })
    }
    render() {
        return (
            <View style = { styles.container }>
                <Text style = { styles.display } > { this.state.display } </Text>

                <View style = { styles.row }>

                    <MyButton val = { 7 }
                        handle_Click = { this._handlClick.bind(this) }/>
                    <MyButton val = { 8 }
                    handle_Click = { this._handlClick.bind(this) }/>
                    <MyButton val = { 9 }
                        handle_Click = { this._handlClick.bind(this) }/>
                    <MyButton val = { '/' }
                        handle_Click = { this._handlClick.bind(this) }/>

                </View>

                <View style = { styles.row } >

                <MyButton val = { 4 }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { 5 }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { 6 }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { '*' }
                    handle_Click = { this._handlClick.bind(this) }/>

                </View>

                <View style = { styles.row } >

                <MyButton val = { 1 }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { 2 }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { 3 }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { '-' }
                    handle_Click = { this._handlClick.bind(this) }/>

                </View>

                <View style = { styles.row } >

                <MyButton val = { 0}
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { '.' }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { '=' }
                    handle_Click = { this._handlClick.bind(this) }/>
                <MyButton val = { '+' }
                    handle_Click = { this._handlClick.bind(this) }/>
                </View>

                <View style = { styles.row }>
                    <MyButton val = { 'C' }
                        handle_Click = { this._handlClick.bind(this) }/>
                </View>

            </View>
        );
    }
}

const MyButton = ({ val, handle_Click }) => (
    <TouchableOpacity style = { styles.btn }
    onPress = {
        () => {
            handle_Click(val)
        }
    } >
    < Text style = { styles.btnText } > { val } </Text>
    </TouchableOpacity>
)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    row: {
        flexDirection: 'row'
    },
    display: {

        fontSize: 40,
        padding: 20

    },
    btn: {

        backgroundColor: '#5086F8',
        flex: 1,
        padding: 20,
    },
    btnText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    }
});

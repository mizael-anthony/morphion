import React from 'react'
import { StyleSheet, View } from 'react-native'


class Flex extends React.Component{
    render(){
        return (
            <View style={styles.v0}>
                <View style={styles.v0prime}>
                    <View style={styles.v1}>1</View>
                    <View style={styles.v2}>2</View>
                    <View style={styles.v3}>3</View>
                </View>

                <View style={styles.v4}>4</View>
                <View style={styles.v5}>5</View>

                <View style={styles.v1prime}>
                    <View style={styles.v6}>6</View>
                    <View style={styles.v7}>7</View>
                </View>
                
            </View>
        )
    }
}




const styles = StyleSheet.create({

    v0 : {
        flex: 1,
        fontSize : 50
    },

    // Bloc 1
    v0prime : {
        flex : 1,
        flexDirection : 'row'
    },


    v1 : {
        backgroundColor : '#0EE',
        flex : 1
        
    },

    v2 : {
        backgroundColor : '#E5E',
        flex: 1
    },

    v3 : {
        backgroundColor : '#EE0',
        flex: 1
    },
    
    v4 : {
        backgroundColor : '#F00',
        flex: 1
    },
    
    v5: {
        backgroundColor : '#0E0',
        flex: 1
    },

    // Bloc 2
    v1prime : {
        flex : 1,
        flexDirection : 'row'
    },
    
    v6 : {
        backgroundColor : '#FFF',
        flex: 1
    },
    
    v7 : {
        backgroundColor : '#00E',
        flex: 1
    }



})

export default Flex
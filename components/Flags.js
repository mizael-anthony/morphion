import React from 'react'
import { StyleSheet, Text, View} from 'react-native'


class Flags extends React.Component{
    render(){
        return(
            <View style={styles.container1}>
                <Text style={styles.text}>Ry tanindrazanay malala oh !</Text>
                <View style={styles.container2}>
                    <View style={styles.white}></View>
                    <View>
                        <View style={styles.green}></View>
                        <View style={styles.red}></View>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create(
    {
        container1 : {
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center',
            flexDirection : 'column',
            backgroundColor : '#444'            
        },

        container2 : {
            flexDirection : 'row',
            
        },

        white : {
            backgroundColor : '#FFF',
            height : 100,
            width : 70
            
        },
        
        green : {
            backgroundColor : '#0F0',
            height : 50,
            width : 100
        },
        
        red : {
            backgroundColor : '#F00',
            height : 50,
            width : 100
        },

        text : {
            fontFamily : 'mv boli',
            fontStyle : 'italic',
            fontSize : 30,
            color : '#FFF'

        }
    }
)



export default Flags
import React from 'react'
import
{
    View,
    Text,
    Button

}from 'react-native'



class Logout extends React.Component{

    render(){
        return (
            <View>
                <Text>Welcome </Text>
                <Button title="Logout"
                 onPress={this.props.onLogoutPress}/>
            </View>
        )
    }
}



export default Logout
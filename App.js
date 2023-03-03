import React from 'react';
import Formulaire from './components/Formulaire';
import Login from './components/Login';
import Logout from './components/Logout';
import MajFormulaire from './components/MajFormulaire';
import Number from './components/Number';
import Test from './components/Test';

export default function App() {

  return(
    
    <MainApp/>
    
  )
 
}

class MainApp extends React.Component{
  
  state = {
    isLoggedIn : false
  }

  render(){
    if(this.state.isLoggedIn){
      return <Login onLoginPress={()=>this.setState({isLoggedIn : false})}/>
    }
    return <Logout onLogoutPress={()=>this.setState({isLoggedIn : true})}/>
  }


}





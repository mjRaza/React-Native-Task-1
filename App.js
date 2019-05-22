import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import Input from './components/inputField/Input';
import Buttons from './components/button/Buttons';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1}}> 
        <View style={styles.logoContainer}>
           <Image source={require('./assets/logo.png')}
           style={styles.logo}/>
         </View >

         <View style={styles.signinContainer}>
          <Input inputTextPlaceholder={'User Name'}/>
          <Input inputTextPlaceholder={'password'}/>
          <Buttons buttonText={'Sign In'}/>
          <View style={{padding:20,height:150,justifyContent:"space-around"}}>
          <Text>Forget your password?</Text>
          <Text>or join with</Text>
          </View>
          <Buttons buttonText={'Sign Up'}/>


        </View>





        

         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'center',
    

  },
  logoContainer:{
    flex:1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    // justifyContent:'center',

  },
  logo:{
    width:100,
    marginTop:60,
    height:100,
  },
  signinContainer:{
    flex:2,
    backgroundColor:'#fff',
    alignItems: 'center',
    paddingTop: 10,
  },
  signupContainer:{
    flex:1,
    backgroundColor:'#494949'
  }
  
});

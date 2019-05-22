import React, { Component } from 'react'
import { Text, View,TouchableHighlight,StyleSheet} from 'react-native'

const Buttons =({buttonText})=> 
{
    return (
      <View>
         
         <TouchableHighlight style={{alignItems:'center'}}>

            <Text style={styles.text}>{buttonText}</Text>

         </TouchableHighlight>

      </View>
    )
  }

export default Buttons



const styles = StyleSheet.create
({
   
     
    text:
    {
        // color:'black',
        color:'white',
        fontSize:30,
        textAlign: 'center',
        padding: 8,
        width:'300%',
        // backgroundColor: '#DDDDDD',
        backgroundColor: 'black',

        // borderRadius: 20,
    }


    
});
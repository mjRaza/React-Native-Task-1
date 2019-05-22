import React, { Component } from 'react'
import { Text, StyleSheet, View ,TextInput} from 'react-native'
import styles from './styles'


const Input =({inputTextPlaceholder})=> 
{
  
    return (
      <View style={styles.inputContainer}>
             <TextInput style={styles.input}
             placeholder={inputTextPlaceholder}
             placeholderTextColor = "#9a73ef"
             />
      </View>
    )
  }




export default Input;
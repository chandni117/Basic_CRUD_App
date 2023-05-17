import React from 'react';
import {  Text, StyleSheet, View , Alert} from 'react-native';
import Background from './Background';
import Btn from './btn';
import { green } from './constants';
import TextField from './textField';

function AddUserForm() {
  return (
    <View style={FormStyle.container}>
        <Background >
            <Text style={FormStyle.text}>Add new User</Text>
            <TextField placeholder="Enter Name"/> 
            <TextField placeholder="Enter Email" keyboardType='email-address'/>
            <TextField placeholder="Enter Address"/>
            <Btn bgColor={green} textColor='white' btnLabel="Save User" Press={()=> {Alert.alert("navigation is done")}} />      
        </Background>
    </View>
  );
}

const FormStyle = StyleSheet.create({
    container: {
        flex: 1,
      },
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold', 
        padding: 5,
    },
})
export default AddUserForm;
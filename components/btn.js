import React from 'react' ;
import {View , Text ,TouchableOpacity, StyleSheet } from 'react-native';

export default function Btn({bgColor, textColor , btnLabel}) {
    return (
        <TouchableOpacity 
        style={{
                backgroundColor: bgColor ,
                borderRadius: 100,
                alignItems: 'center',
                width: 250,
                paddingVertical : 5,
                marginHorizontal: 50}}>
            <Text
                style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: textColor}}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  
    
})
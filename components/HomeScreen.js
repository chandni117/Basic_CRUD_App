import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  
} from 'react-native';


function HomeScreen({ navigation}) {
    return (
    <View style={styles.container}>
        
      <Button
        title="Add User"
        color='navy'
        onPress={() => navigation.navigate('AddUser')}
        style={styles.btn}
      />
    </View>
)}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 30,
        },
        btn : {
            backgroundColor: '#808000',
            padding: 10,
            borderRadius: 30,
            fontSize: 25
            
        }

    }
)


export default HomeScreen ;
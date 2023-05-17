import React from 'react' ;
import { TextInput} from 'react-native';
import { green } from './constants';

const TextField = props => {
    return (
        <TextInput {...props}
            style={{
                borderWidth: 1,
                margin: 10,
                borderRadius: 100,
                paddingHorizontal: 10,
                backgroundColor: 'rgb(220,220,220)',
                color:green
            }}
            placeholderTextColor={green}
         / >
            
        
    )
}

export default TextField;
import * as React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

function Dev({navigation}){
    return(
        <View>
            <Button title="Device Information" 
            onPress={() => navigation.navigate('Devinfo')}
            color="#a52a2a"></Button>
        </View>
    )
}

export default Dev;
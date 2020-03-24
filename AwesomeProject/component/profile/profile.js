import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default Profile;

function Profile(){
    return(
        <View style={{alignItems:'center'}}>
            <Text>Profile</Text>
        </View>
    )
}
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default Home;

function Home(){
    return(
        <View style={{alignItems:'center',backgroundColor:'#f0e0df',flex: 1,}}>
            <Text>Home</Text>
        </View>
    )
}
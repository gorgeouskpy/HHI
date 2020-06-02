import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './home'
import HomeX from './homemain'

const HomeStack = createStackNavigator();

export default function HomeStackScreen(){
    return(
        <HomeStack.Navigator
            initialRouteName="词汇量大挑战"
            screenOptions={{
                headerStyle:{backgroundColor:"#a52a2a"},
                headerTitleStyle:{color:"#f0e0df",align:"center"},
                headerTintColor:"#f0e0df"
            }}>
            <HomeStack.Screen name="词汇量大挑战" component={Home}></HomeStack.Screen>
            <HomeStack.Screen name="请选择正确的释义" component={HomeX}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}
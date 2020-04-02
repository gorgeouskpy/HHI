import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../home/home'
import HomeX from '../home/homemain'

const HomeStack = createStackNavigator();

export default function HomeStackScreen(){
    return(
        <HomeStack.Navigator
            initialRouteName="Guide"
            screenOptions={{
                headerStyle:{backgroundColor:"#a52a2a"},
                headerTitleStyle:{color:"#f0e0df",align:"center"},
                headerTintColor:"#f0e0df"
            }}>
            <HomeStack.Screen name="Guide" component={Home}></HomeStack.Screen>
            <HomeStack.Screen name="Main" component={HomeX}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}
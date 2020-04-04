import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './menu';
import Profile from './profile';

const ProfileStack = createStackNavigator();

function MenuStackX(){
    return(
            <ProfileStack.Navigator
                initialRouteName="Menu"
                screenOptions={{
                    headerStyle:{backgroundColor:"#a52a2a"},
                    headerTitleStyle:{color:"#f0e0df",align:"center"},
                    headerTintColor:"#f0e0df"
                }}
                >
                <ProfileStack.Screen
                    name = "Menu"
                    component = {Menu}
                    ></ProfileStack.Screen>
                <ProfileStack.Screen
                    name = "Profile"
                    component = {Profile}
                    ></ProfileStack.Screen>
            </ProfileStack.Navigator>
    )
};

export default MenuStackX;
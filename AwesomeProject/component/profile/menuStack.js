import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/***************引入自定义组件***************/
import Menu from './menu';
import Profile from './profile';
import Rank from './rank';
import About from './about';
import Dev from './dev';
import Setting from './setting';
import Devinfo from './dev/devinfo'

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
                <ProfileStack.Screen
                    name = "Setting"
                    component = {Setting}
                    ></ProfileStack.Screen>
                <ProfileStack.Screen
                    name = "Ranking"
                    component = {Rank}
                    ></ProfileStack.Screen>
                <ProfileStack.Screen
                    name = "Developer"
                    component = {Dev}
                    ></ProfileStack.Screen>
                <ProfileStack.Screen
                    name = "About"
                    component = {About}
                    ></ProfileStack.Screen>
                <ProfileStack.Screen
                    name = "Devinfo"
                    component = {Devinfo}
                    ></ProfileStack.Screen>
            </ProfileStack.Navigator>
    )
};

export default MenuStackX;
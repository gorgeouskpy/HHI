
//created by kpy root@gorgeouskpy.cn
//last edited by kpy root@gorgeouskpy.cn on 2020-04-07
//HHI © all rights reserved

import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/************引入自定义组件***************/
import Home from './component/home/home';
import HomeStackScreen from './component/home/homeStack'
import Menu from './component/profile/menu';
import MenuStackX from './component/profile/menuStack';
import Explore from './component/explore/explore';

import IconHome from './component/tabBar/homeIcon';
import IconMenu from './component/tabBar/menuIcon';
import IconExp from './component/tabBar/expIcon';


export default App;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarOptions={{
                    style:{backgroundColor:'#a52a2a'},
                    activeTintColor:'#f0e0df',
                    inactiveTintColor: '#c06c67',
                }}>
                <Tab.Screen
                    name='Explore'
                    component={Explore}
                    options={{
                        tabBarIcon:()=><IconExp></IconExp>
                    }}
                    ></Tab.Screen>
                <Tab.Screen
                    name='Home'
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon:()=>(<IconHome></IconHome>)
                    }}
                    ></Tab.Screen>
                <Tab.Screen
                    name='Menu'
                    component={MenuStackX}
                    options={{
                        tabBarIcon:()=>(<IconMenu></IconMenu>)
                    }}
                    ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
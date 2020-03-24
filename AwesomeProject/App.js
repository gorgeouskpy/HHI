import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/************引入自定义组件***************/
import Home from './component/home/home';
import Profile from './component/profile/profile';
import Explore from './component/explore/explore';

import IconHome from './component/tabBar/homeIcon';

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
                    ></Tab.Screen>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        tabBarIcon:()=>(<IconHome></IconHome>)
                    }}
                    ></Tab.Screen>
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    ></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
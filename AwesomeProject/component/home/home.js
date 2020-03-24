import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Home extends Component{
    render(){
        return(
            <View style={styles.basicView}>
                <Text style={styles.coreText}>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    basicView:{
        flex: 1,
        backgroundColor:'#f0e0df',
        alignItems: 'center',
    },
    coreText:{
        flex: 1,
        paddingTop: 50,
    }
})

export default Home
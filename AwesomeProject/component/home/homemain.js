import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const someword = "word";

const someword1 = "word";
const someword2 = "word";
const someword3 = "word";
const someword4 = "word";

class Home extends Component{
    render(){
        return(
            <View style={styles.basicView}>
                <Text style={styles.coreText}>{someword}</Text>
                    <View style={styles.buttonView}><Button title={someword1} color="#a52a2a" onPress={()=>{}}></Button></View>
                    <View style={styles.buttonView}><Button title={someword1} color="#a52a2a" onPress={()=>{}}></Button></View>
                    <View style={styles.buttonView}><Button title={someword1} color="#a52a2a" onPress={()=>{}}></Button></View>
                    <View style={styles.buttonView}><Button title={someword1} color="#a52a2a" onPress={()=>{}}></Button></View>
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
        fontSize:50,
        color:'#552a29',
    },
    buttonView:{
        paddingBottom:20,
        width:250,
        color:'#552a29',
    }
})

export default Home
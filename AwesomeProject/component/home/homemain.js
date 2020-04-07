import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const someword = "Correspond";
const currentScore = 1;

const someword1 = "离经叛道的";
const someword2 = "透彻明晰的";
const someword3 = "粉饰太平的";
const someword4 = "愤世嫉俗的";

class Home extends Component{
    render(){
        return(
            <View style={styles.basicView}>
                <Text style={styles.coreText}>{someword}</Text>
                <Text style={styles.secTect}>{currentScore}</Text>
                <View style={styles.buttonView}><Button title={someword1} color="#a52a2a" onPress={()=>{}}></Button></View>
                <View style={styles.buttonView}><Button title={someword2} color="#a52a2a" onPress={()=>{}}></Button></View>
                <View style={styles.buttonView}><Button title={someword3} color="#a52a2a" onPress={()=>{}}></Button></View>
                <View style={styles.buttonView}><Button title={someword4} color="#a52a2a" onPress={()=>{}}></Button></View>
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
    },
    secTect:{
        paddingBottom:20,
        color:"#552a29",
    }
})

export default Home
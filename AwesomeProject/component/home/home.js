import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const score = 8001;

function Home({navigation}){
        return(
            <View style={styles.basicView}>
                <Text style={styles.secText}>测试你的词汇量！</Text>
                <Text style={styles.coreText}>{score}</Text>
                <View style={styles.buttonStyle}>
                    <Button 
                        title="Start To Test" 
                        onPress={()=>navigation.navigate('请选择正确的释义')}
                        color="#a52a2a"
                        size="big"
                        ></Button>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    basicView:{
        flex: 1,
        backgroundColor:'#f0e0df',
        alignItems: 'center',
    },
    coreText:{
        flex: 1,
        fontSize: 50,
        paddingTop: 50,
        color:"#552a29",
    },
    buttonStyle:{
        fontSize:18,
        width:180,
        paddingBottom:40,
    },
    secText:{
        fontSize: 20,
        color:"#552a29",
        paddingTop: 20,
    }
})

export default Home
import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TextInput,
    StyleSheet, 
    ScrollView, 
    Alert,
    setState
} from 'react-native';

export default class Explore extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchingWord:'xxx',
        };
        this.searchWord = this.searchWord.bind(this);
    }


    searchWord(word){
        this.setState=({
            searchingWord:"me",
        });
        Alert.alert(this.state.searchingWord+'***'+word);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <TextInput
                    placeholder="输入您想检索的单词"
                    style={styles.searchWord}
                    onChangeText={text=>this.searchWord(text)}
                ></TextInput>
                <ScrollView
                    style={styles.scrollStyle}
                    >
                        <Text
                            style={{height: 88}}
                        >{this.state.searchingWord}</Text>
                    </ScrollView>
            </View>
        );
    }
    }

const styles = StyleSheet.create({
    searchWord:{
        backgroundColor:'#a52a2a',
        textAlign:'center',
        color:'#f0e0df',
    },
    scrollStyle:{
        backgroundColor:'#f0e0df',
    }
})
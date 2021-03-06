import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TextInput,
    StyleSheet, 
    ScrollView, 
    Alert,
    ActivityIndicator,
} from 'react-native';

export default class Explore extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchingWord:'请输入您想检索的单词',
            isLoading:false,
        };
        this.searchWord = this.searchWord.bind(this);
        this.fetchMeaning = this.fetchMeaning.bind(this);
    }


    async fetchMeaning(ofWhat){
        try {
            const response = await fetch('http://182.92.180.14/lookup.php?word='+ofWhat,{
                method:'GET',
            });
            const responseJson = await (response.json());
            this.setState({
                searchingWord:responseJson.meaning,
                isLoading:false,
            })
        }
        catch (e) {
            console.error(e);
        }
    }

    searchWord(word){
            this.setState({
                isLoading:true,
            })
        this.fetchMeaning(word);
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex:1,justifyContent:'center'}}>
                <TextInput
                    placeholder="输入您想检索的单词"
                    style={styles.searchWord}
                    onChangeText={text=>this.searchWord(text)}
                ></TextInput>
                <View
                    style={styles.scrollStyleX}
                    >
                        <ActivityIndicator color="#a52a2a" size="large"></ActivityIndicator>
                    </View>
            </View>

            )
        }
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
                            style={{height: 88,color:'#452520',fontSize:18,letterSpacing:.6,}}
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
        padding:20,
        color:'#552a29',
    },
    scrollStyleX:{
        flex:1,
        backgroundColor:'#f0e0df',
        justifyContent:'center',
    },
})
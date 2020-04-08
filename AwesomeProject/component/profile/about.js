import * as React from 'react';
import {
    View,
    Text,
} from 'react-native';

function About(){
    return(
        <View style={{backgroundColor:'#f0e0df', flex:1}}>
            <Text style={{color:'#a52a2a', fontSize:60,paddingBottom:21}}>greetings!</Text>
            <Text style={{color:"#552a29",fontSize:20}}>这是由 头脑发热公司 的小组成员们制作的 智能英语学习机器人 的软件GUI演示</Text>
            <Text style={{color:'#552a29',fontSize:20}}>HHI 头脑发热© all rights reserved</Text>
        </View>
    )
}

export default About;
import * as React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

function Profile(){
    return(
        <View style={styles.basicView}>
            <Image
                source={require('../../static/000.png')}
                style={styles.imgStyle}
                ></Image>
                <Text style={styles.textStyle}>昵称:{user.username}</Text>
                <Text style={styles.textStyle}>注册时间:{user.logintime}</Text>
                <Text style={styles.textStyle}>最高分:{user.highscore}</Text>
                <Text style={styles.textStyle}>全球排名: #{user.rank}</Text>
        </View>
    )
}

const user = {
    username:'Eli',
    logintime: '2020-4-5',
    highscore: '8001',
    rank: '1',
}

const styles = StyleSheet.create({
    basicView:{
        backgroundColor:'#f0e0df',
        flex:1,
    },
    imgStyle:{
        height:70,
        width:70,
        marginBottom:40,
        marginTop: 40,
        borderRadius: 100,
        alignSelf:"center",
    },
    textStyle:{
        margin:10,
        color:'#552a29',
    }
})

export default Profile;
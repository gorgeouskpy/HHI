import * as React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';

function Rank(){
    return(
        <View>
            <FlatList
                data={[
                    {ranking:1,username:'Eli',score:8001},
                    {ranking:2,username:'Luisa',score:7341},
                    {ranking:3,username:'Jans',score:7221},
                    {ranking:4,username:'Mark',score:6842},
                    {ranking:5,username:'Peter',score:6700},
                    {ranking:6,username:'Sara',score:5680},
                    {ranking:7,username:'Jack',score:5664},
                    {ranking:8,username:'Dove',score:4578},
                    {ranking:9,username:'Oriacal',score:4432},
                    {ranking:10,username:'HealsCliff',score:3321},
                    {ranking:11,username:'Catherine',score:3321},
                    {ranking:12,username:'Share',score:2020},
                ]}
                renderItem={({item}) => <RankListComponent item={item}></RankListComponent>}
                ></FlatList>
        </View>
    )
}

function RankListComponent({item}){
    return(
        <View style={styles.listComponentView}>
            <Text style={styles.rankingTag}>{item.ranking}</Text>
            <Text style={styles.usernameTag}>{item.username}</Text>
            <Text style={styles.scoreTag}>{item.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listStyle:{
        backgroundColor:'#f0e0df',
    },
    rankingTag:{
        padding:5,
        margin:10,
        height:30,
        alignSelf:'center',
        backgroundColor:'#a52a2a',
        borderRadius:110,
        color:'#f0e0df',
    },
    listComponentView:{
        flexDirection:'row',
        backgroundColor:'#f0e0df',
        borderBottomColor:'#a52a2a',
        borderBottomWidth:.5,
        direction:'ltr',
    },
    usernameTag:{
        color:'#a52a29',
        padding:10,
    },
    scoreTag:{
        alignSelf:'flex-end',
        marginRight:20,
        padding:10,
        fontSize:20,
        color: '#552a29',
        direction:'ltr',
        position:'absolute',
        right:0,
    }
});

export default Rank;
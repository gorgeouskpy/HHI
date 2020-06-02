import * as React from 'react';
import { Button, View, Text, StyleSheet,FlatList } from 'react-native';

function Menu({navigation}){
    return(
        <View style={styles.basicView}>
            <View style={styles.menuContainerxxx}>
                <Button
                    title="个人档案"
                    onPress={() => navigation.navigate('Profile')}
                    color="#a52a2a"
                    ></Button>
            </View>
            <View style={styles.menuContainer}>
                <Button
                    title="排行榜"
                    onPress={() => navigation.navigate('Ranking')}
                    color="#a52a2a"
                    ></Button>
            </View>
            <View style={styles.menuContainer}>
                <Button
                    title="设定"
                    onPress={() => navigation.navigate('Setting')}
                    color="#a52a2a"
                    ></Button>
            </View>
            <View style={styles.menuContainer}>
                <Button
                    title="开发者模式"
                    onPress={() => navigation.navigate('Developer')}
                    color="#a52a2a"
                    ></Button>
            </View>
            <View style={styles.menuContainerx}>
                <Button
                    title="帮助&反馈"
                    onPress={() => navigation.navigate('Profile')}
                    color="#a52a2a"
                    ></Button>
            </View>
            <View style={styles.menuContainer}>
                <Button
                    title="给我们评分"
                    onPress={() => navigation.navigate('Profile')}
                    color="#a52a2a"
                    ></Button>
            </View>
            <View style={styles.menuContainer}>
                <Button
                    title="关于"
                    onPress={() => navigation.navigate('About')}
                    color="#a52a2a"
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
    menuContainer:{
        width:'100%',
        paddingBottom:15,
    },
    menuContainerx:{
        width:'100%',
        paddingBottom:1,
    },
    menuContainerxxx:{
        width:'100%',
        paddingBottom:15,
        paddingTop:15,
    },
})

export default Menu;
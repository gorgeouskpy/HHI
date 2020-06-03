import * as React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';

function Dev({navigation}){
    return(
        <View style={styles.basicView}>
            <View style={styles.buttonContainer}>
                <Button title="硬件信息" 
                onPress={() => navigation.navigate('Devinfo')}
                color="#a52a2a"></Button>
            </View>
            <View style={styles.buttonContainerx}>
                <Button title="设备控制台" 
                onPress={() => navigation.navigate('Console')}
                color="#a52a2a"></Button>
            </View>
            <View style={styles.buttonContainerx}>
                <Button title="上传本地词典" 
                onPress={() => navigation.navigate('Upload')}
                color="#a52a2a"></Button>
            </View>
            <View style={styles.buttonContainerx}>
                <Button title="测试设备状态" 
                onPress={() => navigation.navigate('Test mode')}
                color="#a52a2a"></Button>
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
    buttonContainer:{
        width:'100%',
        paddingBottom:0,
        paddingTop:15,
    },
    buttonContainerx:{
        width:'100%',
        paddingBottom:0,
        paddingTop:15,
    },
})

export default Dev;
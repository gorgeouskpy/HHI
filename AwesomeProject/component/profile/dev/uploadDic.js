import * as React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

class Upload extends React.Component{

constructor(props){
    super(props)
}

render(){
    return(
        <View style={styles.basicView}>
            <View style={styles.buttonStyle}>
                <Button title="上传词典" color="#a52a2a" ></Button>
            </View>
            <View style={styles.hintView}>
                <Text style={styles.hintStyle}>1.请使用csv格式上传您的自定词典</Text>
                <Text style={styles.hintStyle}>2.您的词典只有您自己才能看到</Text>
                <Text style={styles.hintStyle}>3.请先登录或在网站注册</Text>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    buttonStyle:{
        paddingTop:50,
    },
    basicView:{
        flex: 1,
        backgroundColor:'#f0e0df',
        alignItems: 'center',
    },
    hintView:{
        flex:1,
        marginTop:270,
    },
    hintStyle:{
        color:"#a52a2a",
        fontSize:10,
    },
})

export default Upload;
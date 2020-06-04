import * as React from 'react'
import { Text, View, StyleSheet, Button, ActivityIndicator } from 'react-native'

class UploadStateHinter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShow:props.isShow,
            isCorrect:props.isCorrect,
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            isShow:props.isShow,
            isCorrect:props.isCorrect,
        })
    }

    render(){
        if((this.state.isShow)&&(this.state.isCorrect)){
            return(
                <ActivityIndicator
                size="large"
                color="#a52a2a"
                style={styles.IndicatorStyle}
                ></ActivityIndicator>
            )
        }
        else if((this.state.isShow)&&(!this.state.isCorrect)){
            return(
                <Text style={styles.IndicatorStyle}>请登录或检查您的网络连接</Text>
            )
        }
        else{
            return(
                <Text style={styles.IndicatorStyle}></Text>
            )
        }
    }
}

class Upload extends React.Component{

constructor(props){
    super(props)
    this.state={
        isHintShow:false,
        isHintCorrect:false,
    }

    this.submitDic = this.submitDic.bind(this);
}

submitDic(){
    this.setState({
        isHintShow:true,
    })
}

render(){
    return(
        <View style={styles.basicView}>
            <View style={styles.buttonStyle}>
                <Button title="上传词典" color="#a52a2a" onPress={this.submitDic}></Button>
            </View>
            <UploadStateHinter isShow={this.state.isHintShow} isCorrect={this.state.isHintCorrect}></UploadStateHinter>
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
        position:"absolute",
        marginTop:360,
    },
    hintStyle:{
        color:"#a52a2a",
        fontSize:10,
    },
    IndicatorStyle:{
        marginTop:210,
        color:"#a52a2a",
    }
})

export default Upload;
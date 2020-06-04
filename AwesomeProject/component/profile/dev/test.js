import * as React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

const data = [
    {"key":1,"check":"电机工作状态","result":"ok"},
    {"key":2,"check":"电机工作状态","result":"ok"},
    {"key":3,"check":"电机工作状态","result":"ok"},
    {"key":4,"check":"电机工作状态","result":"ok"},
    {"key":5,"check":"电机工作状态","result":"ok"},
    {"key":6,"check":"电机工作状态","result":"ok"},
]

class SingleState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            falsehint:"正在获得引脚电平"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                falsehint:"不能获取引脚信息，请检查设备"
            })
        },5000)
    }

    render(){
        if(this.props.showing){
            return(
            <Text>{this.props.content}</Text>
            )
        }
        else{
            return(
            <Text>{this.props.content} {this.state.falsehint}</Text>
            )
        }
    }
}

class StateConsole extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            check:"Checking Device...",
            isLine1Showing:true,
            isLine2Showing:true,
            isLine3Showing:true,
            isLine4Showing:true,
            isLine5Showing:true,
            isLine6Showing:true,
            isLine7Showing:true,
            isLine8Showing:true,
            isLine9Showing:true,
            isLine10Showing:true,

            name1:"PA_5 ",
            name2:"PA_6 ",
            name3:"PA_7 ",
            name4:"PA_9 ",
            name5:"PA_1 ",
            name6:"Pin 10",
            name7:"Pin 10",
            name8:"Pin 10",
            name9:"Pin 10",
            name10:"Pin 10",
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLine1Showing:false,
            })
            setTimeout(()=>{
                this.setState({
                    isLine2Showing:false,
                })
                setTimeout(()=>{
                    this.setState({
                        isLine3Showing:false,
                    })
                    setTimeout(()=>{
                        this.setState({
                            isLine4Showing:false,
                        })
                        setTimeout(()=>{
                            this.setState({
                                isLine5Showing:false,
                            })
                            setTimeout(()=>{
                                this.setState({
                                    isLine6Showing:false,
                                })
                                setTimeout(()=>{
                                    this.setState({
                                        isLine7Showing:false,
                                    })
                                    setTimeout(()=>{
                                        this.setState({
                                            isLine8Showing:false,
                                        })
                                        setTimeout(()=>{
                                            this.setState({
                                                isLine9Showing:false,
                                            })
                                            setTimeout(()=>{
                                                this.setState({
                                                    isLine10Showing:false,
                                                })
                                            },450)
                                        },124)
                                    },542)
                                },236)
                            },256)
                        },450)
                    },124)
                },542)
            },236)
        },256)
    }
    
    render(){
        return(
        <View style={styles.basicView}>
            <SingleState showing={this.state.isLine1Showing} content={this.state.name1}></SingleState>
            <SingleState showing={this.state.isLine2Showing} content={this.state.name2}></SingleState>
            <SingleState showing={this.state.isLine3Showing} content={this.state.name3}></SingleState>
            <SingleState showing={this.state.isLine4Showing} content={this.state.name4}></SingleState>
            <SingleState showing={this.state.isLine5Showing} content={this.state.name5}></SingleState>
            <SingleState showing={this.state.isLine6Showing} content={this.state.name6}></SingleState>
            <SingleState showing={this.state.isLine7Showing} content={this.state.name7}></SingleState>
            <SingleState showing={this.state.isLine8Showing} content={this.state.name8}></SingleState>
            <SingleState showing={this.state.isLine9Showing} content={this.state.name9}></SingleState>
            <SingleState showing={this.state.isLine10Showing} content={this.state.name10}></SingleState>
        </View>
        )
    }
}


function Cons(){
    return(
        <StateConsole></StateConsole>
    )
}

const styles = StyleSheet.create({
    basicView:{
        flex: 1,
        backgroundColor:'#f0e0df',
    },
})

export default Cons;
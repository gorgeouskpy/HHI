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
            falsehint:"不能获取模块信息，请检查设备"
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                falsehint:"不能获取模块信息，请检查设备"
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
            <Text>{this.state.falsehint}</Text>
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
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    }
    
    render(){
        return(
        <View>
            <SingleState showing={this.state.isLine1Showing} content={this.state.check}></SingleState>
            <SingleState showing={this.state.isLine2Showing} content={this.state.check}></SingleState>
            <SingleState showing={this.state.isLine3Showing} content={this.state.check}></SingleState>
            <SingleState showing={this.state.isLine4Showing} content={this.state.check}></SingleState>
            <SingleState showing={this.state.isLine5Showing} content={this.state.check}></SingleState>
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
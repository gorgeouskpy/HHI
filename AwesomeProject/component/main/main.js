import React, { Component } from 'react';
import { Text, View, Image, StyleSheet,} from 'react-native';
import { StackNavigator } from 'react-navigation';

/* 导入外部组件类 */
import TabNavigator from 'react-native-tab-navigator';
import Home from '../home/home';
import Explore from '../explore/explore';
import Profile from '../profile/profile';

export default class HelloWorldApp extends Component {
  //初始化函数状态机
state = {
    selectedTab: 'home',
}

render() {
return (
    <TabNavigator>
        {/*首页*/}
        <TabNavigator.Item
            title="Home"
            renderIcon={() => <Image style={styles.iconStyle} source = {{uri: 'https://gorgeousbed.oss-cn-beijing.aliyuncs.com/static/logo.ico'}}></Image>}
            renderSelectedIcon={()=> <Image style={styles.iconStyle} source = {{uri: 'https://gorgeousbed.oss-cn-beijing.aliyuncs.com/static/hf.jpg'}}></Image>}
            onPress={()=>{this.setState({selectedTab: 'home'})}}
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={styles.titleStyle}
            >
                <Home></Home>
        </TabNavigator.Item>
        {/*探索*/}
        <TabNavigator.Item
            title="Explore"
            renderIcon={() => <Image style={styles.iconStyle} source = {{uri: 'https://gorgeousbed.oss-cn-beijing.aliyuncs.com/static/logo.ico'}}></Image>}
            renderSelectedIcon={()=> <Image style={styles.iconStyle} source = {{uri: 'https://gorgeousbed.oss-cn-beijing.aliyuncs.com/static/hf.jpg'}}></Image>}
            onPress={()=>{this.setState({selectedTab: 'exp'})}}
            selected={this.state.selectedTab === 'exp'}
            selectedTitleStyle={styles.titleStyle}
            >
                <Explore></Explore>
        </TabNavigator.Item>
        {/*档案*/}
        <TabNavigator.Item
            title="Profile"
            renderIcon={() => <Image style={styles.iconStyle} source = {{uri: 'https://gorgeousbed.oss-cn-beijing.aliyuncs.com/static/logo.ico'}}></Image>}
            renderSelectedIcon={()=> <Image style={styles.iconStyle} source = {{uri: 'https://gorgeousbed.oss-cn-beijing.aliyuncs.com/static/hf.jpg'}}></Image>}
            onPress={()=>{this.setState({selectedTab: 'pro'})}}
            selected={this.state.selectedTab === 'pro'}
            selectedTitleStyle={styles.titleStyle}
        >
                <Profile></Profile>
        </TabNavigator.Item>
    </TabNavigator>
);
}
}

const styles = StyleSheet.create({
iconStyle: {
    height: 30,
    width: 30,
},
titleStyle: {
    color: 'red',
}
})
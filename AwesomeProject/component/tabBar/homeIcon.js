import * as React from 'react';
import { Image } from 'react-native';

export default IconHome;

function IconHome(){
    return(
        <Image source={require('../../static/home.png')}
        style={{height: 20, width:20,}}
        ></Image>
    )
}
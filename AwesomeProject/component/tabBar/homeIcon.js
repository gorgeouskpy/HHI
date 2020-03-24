import * as React from 'react';
import { Image } from 'react-native';

export default IconHome;

function IconHome(){
    return(
        <Image source={require('../../static/ss.png')}
        style={{height: 30, width:30,}}
        ></Image>
    )
}
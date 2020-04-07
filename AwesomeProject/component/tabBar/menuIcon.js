import * as React from 'react';
import { Image } from 'react-native';


function IconMenu(){
    return(
        <Image source={require('../../static/menu.png')}
        style={{height: 17, width:17,paddingBottom:10,}}
        ></Image>
        )
    }

export default IconMenu;
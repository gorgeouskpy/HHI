import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function devinfo(){
    return(
        <View style={styles.basicView}>
            <Text style={styles.textStyle}>STM32L496ZGT6 in LQFP144 package</Text>
            <Text style={styles.textStyle}>ARM®32-bit Cortex®-M4 CPU with FPU</Text>
            <Text style={styles.textStyle}>80 MHz max CPU frequency</Text>
            <Text style={styles.textStyle}>115 x GPIOs with external interrupt capability</Text>
            <Text style={styles.textStyle}>7 x General Purpose Timers (5 x 16-bits + 2 x 32-bits)</Text>
            <Text style={styles.textStyle}>320KB SRAM</Text>
            <Text style={styles.textStyle}>1MB Flash</Text>
            <Text style={styles.textStyle}>DMA</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    basicView:{
        flex: 1,
        backgroundColor:'#f0e0df',
        alignItems: 'flex-start',
    },
    textStyle:{
        padding:5,
        color:"#552a29",
    }
})

export default devinfo;
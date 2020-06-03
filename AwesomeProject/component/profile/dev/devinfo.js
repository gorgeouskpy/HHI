import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function devinfo(){
    return(
        <View style={styles.basicView}>
            <Text>This is text info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    basicView:{
        flex: 1,
        backgroundColor:'#f0e0df',
        alignItems: 'center',
    },
})

export default devinfo;
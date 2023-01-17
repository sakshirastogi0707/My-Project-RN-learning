import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'
import Icons from './icon'

const HrmHeader = (props) => {
  return (

      <View style={[styles.View,props.style]} >
          <Image style={styles.Image} source={Icons.Logo}/>
      </View>

  )
}

export default HrmHeader

const styles = StyleSheet.create({
    View:{
        width: '90%',
        alignSelf: "center",
        // backgroundColor: "green",
        justifyContent:"center"
    },
    Image: {
        width: 25,
        height: 25
    }
})
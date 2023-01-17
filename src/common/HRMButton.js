import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
    <View>
     <TouchableOpacity style={{width: 130, height: 45,borderRadius: 16,justifyContent: "center",backgroundColor: "#AB5AB4", alignItems: "center"  }} onPress={props.onPress}>
<Text style={{fontSize: 15, color:"white",fontWeight: '700'}}>{props.text}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})
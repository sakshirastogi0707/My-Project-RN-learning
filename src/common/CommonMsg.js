import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../themes'

const CommonMsg = () => {
  return (
    <View style={styles.MsgContainer}>
    <Text style={styles.MsgText}>Already have an account?</Text>
    <Text style={[styles.MsgText,{color: Colors.Purple}]}> Sign in</Text>
  </View>

  )
}

export default CommonMsg

const styles = StyleSheet.create({
    MsgContainer: {
        // width: '90%',
        height: 70,
        // backgroundColor: "red",
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      MsgText: {
        fontSize: 14,
      },
})
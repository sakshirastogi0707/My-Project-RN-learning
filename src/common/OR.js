import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const OR = () => {
  return (
    <View style={styles.ORViewStyle}>
      <View style={{width: 80, height: 2, backgroundColor: '#DFE5EE'}}></View>
      <Text style={{color: '#DFE5EE'}}>OR</Text>
      <View style={{width: 80, height: 2, backgroundColor: '#DFE5EE'}}></View>
    </View>
  );
};

export default OR;
const styles = StyleSheet.create({
  ORViewStyle: {
    width: '60%',
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
// import Colors from '../themes/Colors';
const InputBox = props => {
  return (
    <View style={{width: '100%', height: 80}}>
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputStyle: {
    width: '95%',
    height: 55,
    borderRadius: 10,
    backgroundColor: '#E9E9E9',
    padding: 15,
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    marginTop: 20,
    // justifyContent: "center"
    // marginVertical: 20
  },
});

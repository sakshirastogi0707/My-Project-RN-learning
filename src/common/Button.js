import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../themes';

const Button = props => {
  return (
    <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={props.onPress}>
      <Text style={[styles.ButtonText, props.style]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    width: 300,
    height: 55,
    backgroundColor: Colors.DarkPurple,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ButtonText: {
    fontSize: 16,
    letterSpacing: 1.5,
  },
});

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';

const HalfButton = props => {
  return (
    <View style={styles.ButtonContainer}>
      <TouchableOpacity style={styles.Button} activeOpacity={0.8} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} activeOpacity={0.8}>
        <Text style={styles.btnText}>{props.title2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HalfButton;

const styles = StyleSheet.create({
  ButtonContainer: {
    marginTop: 30,
    width: '85%',
    height: '10%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //   backgroundColor: "white"
  },
  Button: {
    width: 160,
    height: 50,
    backgroundColor: Colors.lightBlack,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    letterSpacing: 1.5,
    fontWeight: '300',
    color: '#F9FBFE',
  },
});

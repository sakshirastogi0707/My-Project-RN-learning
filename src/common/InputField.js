import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icons from './icon';
import Colors from '../themes/Colors';

const InputField = props => {
  const [value, setValue] = useState('');
  const onClear = () => {
    setValue('');
  };
  return (
    <View style={styles.InputContainer}>
      <TouchableOpacity
        style={{
          height: 50,
          width: '15%',
          position: 'absolute',
          justifyContent: 'center',
          alignSelf: 'flex-end',
        }}
        onPress={props.OnPress}>
        <Image style={styles.CrossImage} source={props.source} />
      </TouchableOpacity>
      <TextInput
        style={styles.InputText}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        onPress={props.OnPress1}

      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  InputContainer: {
    width: '90%',
    height: 80,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InputText: {
    width: '100%',
    height: 62,
    backgroundColor: Colors.InputBgColor,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 20,
    color: '#F9FBFE',
    zIndex: -1,
    fontWeight: '300',
    fontSize: 14,
  },
  CrossImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 10,
    right: 20,
    backgroundColor: '#787d79',
    borderRadius: 5,
    tintColor: "red"
  },
});

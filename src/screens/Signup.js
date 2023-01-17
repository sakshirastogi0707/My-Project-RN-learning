import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../common/Header';
import Colors from '../themes/Colors';
import InputField from '../common/InputField';
import Button from '../common/Button';
import CommonMsg from '../common/CommonMsg';
import Icons from '../common/icon';
import OR from '../common/OR';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const onNext = () => {
    if (!name) {
      Alert.alert('Please Enter Username');
    } else if (!password) {
      Alert.alert('Please Enter Password');
    } else if (!cpassword) {
      Alert.alert('Please Enter Confirm Password ');
    } else if (password !== cpassword) {
      Alert.alert('Password Does not match');
    }else{
      navigation.navigate('SignupLayout2')
    }
  };
  const onCrossPress = type => {
    if (type == 1) {
      setName('');
    } else if (type == 2) {
      setPassword('');
    } else if (type == 3) {
      setCpassword('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header Title="SIGN UP" />
      {/* <KeyboardAvoidingView/> */}
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <InputField
          placeholder="Username"
          value={name}
          onChangeText={text => setName(text)}
        onCrossPress={() => onCrossPress(1)}

        />
        <InputField
          placeholder="Your Password"
          value={password}
          onChangeText={text => setPassword(text)}
          onCrossPress={() => onCrossPress(2)}
        />
       <InputField
          placeholder="Confirm Password"
          value={cpassword}
          onChangeText={text => setCpassword(text)}
          onCrossPress={() => onCrossPress(3)}
        />

        <View style={{marginTop: 30}}>
          <Button title="NEXT" onPress={() => onNext()} />
        </View>
        <CommonMsg />
        <OR />
        <View style={styles.ButtonContainer}>
          <View style={styles.GoogleBtnStyle}>
            <Image style={styles.IconStyle} source={Icons.GoofleIcon} />
          </View>
          <View style={styles.GoogleBtnStyle}>
            <Image
              style={[styles.IconStyle, {height: 30, width: 23}]}
              source={Icons.AppleIcon}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
  },

  ButtonContainer: {
    width: '40%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'g',
  },
  GoogleBtnStyle: {
    width: 65,
    height: 65,
    backgroundColor: Colors.DarkPurple,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  IconStyle: {
    width: 30,
    height: 20,
  },

  ScrollView: {
    width: '100%',
  },
});

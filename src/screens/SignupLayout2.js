import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../common/Header';
import InputField from '../common/InputField';
import Button from '../common/Button';
import CommonMsg from '../common/CommonMsg';
import OR from '../common/OR';
import { useNavigation } from '@react-navigation/native';

const SignupLayout2 = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Header Title="SIGN UP" />
      <InputField placeholder="Username" />
      <InputField placeholder="Mobile Number" />

      <View style={{width: '100%', justifyContent: 'center', marginTop: 100}}>
        <Button title="CREATE ACCOUNT" onPress={()=> navigation.navigate('verify')} />
      </View>
      <CommonMsg />
      <OR />
    </SafeAreaView>
  );
};

export default SignupLayout2;

const styles = StyleSheet.create({});

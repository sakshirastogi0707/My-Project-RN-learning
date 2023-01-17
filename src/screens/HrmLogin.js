import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import HrmHeader from '../common/HrmHeader';
import Icons from '../common/icon';
import InputBox from '../common/InputBox';
import Colors from '../themes/Colors';
import {postToServer} from '../utils/services';
import storage from '../utils/storage';

import {useNavigation} from '@react-navigation/native';
const HrmLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onsubmit = async () => {
    if (!email) {
      Alert.alert('Please Enter Your Email');
    } else if (!password) {
      Alert.alert('Please Enter Your Password');
    } else {
      const requestParams = {
        email: email,
        password: password,
        type: 'employee',
      };
      try {
        const userResponse = await postToServer('login', requestParams);
        console.log(userResponse,"...................userResponse")
        if (userResponse?.status) {
          const name = userResponse?.user?.employee?.name;
          const accessToken = userResponse?.access_token;
          storage.setItem('authToken',accessToken)

          navigation.navigate('Profile', {
            name: name,
            accessToken: accessToken,
          });
        }
      } catch (error) {
        console.log('errorerrr', error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Image style={styles.Image} source={Icons.bannerImg} />
      <HrmHeader style={{position: 'absolute', height: '10%'}} />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Login</Text>
          <InputBox
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            value={email}
          />

          <InputBox
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Text
            style={{
              textAlign: 'right',
              width: '95%',
              lineHeight: 60,
              fontWeight: '600',
            }}
            onPress={() => navigation.navigate('ForgetPass')}>
            Forgot password?
          </Text>
          <TouchableOpacity
            style={{
              width: 316,
              height: 51,
              borderRadius: 14,
              backgroundColor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => onsubmit()}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HrmLogin;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Image: {
    width: '100%',
    height: '80%',
  },
  text: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  inputContainer: {
    width: '100%',
    height: 350,
    backgroundColor: Colors.white,
    // position: 'absolute',
    bottom: 0,
    borderRadius: 20,
    padding: 30,
    // backgroundColor: "red"
  },
  ScrollView: {
    width: '100%',
    flex: 1,
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import HrmHeader from '../common/HrmHeader';
import Icons from '../common/icon';
import InputBox from '../common/InputBox';
import Colors from '../themes/Colors';
// import {useNavigation} from '@react-navigation/native';
import {postToServer} from '../utils/services';

const NewPass = props => {
  const [code, setCode] = useState();
  const [password, setPassword] = useState();
  const [Cpassword, setCpassword] = useState();

  async function ResetPassword() {
    const RequestParams = {
      email: props?.route?.params?.Email,
      password: password,
      otp: code,
    };
    try {
      const response = await postToServer('resetPassword', RequestParams);
      console.log(RequestParams, 'dhwhedgwgg..............');
      console.log(response, '.............dhfey');
      if (response?.status) {
        console.log('successsss2222222');
      }
    } catch (err) {
      Alert.alert(err);
    }
  }

  const onCreate = async () => {
    if (!code) {
      Alert.alert('Please Enter Code');
    } else if (!password) {
      Alert.alert('Please Enter Password');
    } else if (password !== Cpassword) {
      Alert.alert('Password are not matching');
    } else {
      ResetPassword();
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Image style={styles.Image} source={Icons.bannerImg} />
      <HrmHeader style={{position: 'absolute', height: '10%'}} />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Create New Password</Text>
          <InputBox
            placeholder="Enter verification code"
            onChangeText={text => setCode(text)}
            value={code}
          />

          <InputBox
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <InputBox
            placeholder="Confirm Password"
            value={Cpassword}
            onChangeText={text => setCpassword(text)}
          />

          <TouchableOpacity
            style={{
              width: 316,
              height: 51,
              borderRadius: 14,
              backgroundColor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}
            activeOpacity={0.8}
            onPress={() => onCreate()}>
            <Text style={{fontSize: 16, fontWeight: '600', color: 'white'}}>
              CREATE
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPass;

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
    height: 400,
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

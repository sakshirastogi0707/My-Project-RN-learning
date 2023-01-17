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
import {useNavigation} from '@react-navigation/native';
import {postToServer} from '../utils/services';

const ForgetPass = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const onSend = async () => {
    if (!email) {
      Alert.alert('Please Enter Your Email');
    } else {
      const RequestParams = {
        email: email,
      };

      try {
        const Response = await postToServer('forgetPassword', RequestParams);
        console.log(RequestParams,'paramsss');
        if (Response?.status) {
            console.log('successs11111',Response);
          navigation.navigate('NewPass',{Email:email});
        }
      } catch (err) {
        console.log(err);
        Alert.alert(err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Image style={styles.Image} source={Icons.bannerImg} />
      <HrmHeader style={{position: 'absolute', height: '10%'}} />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Forget Password</Text>
          <InputBox
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            value={email}
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
            activeOpacity={0.8}>
            <Text
              style={{fontSize: 16, fontWeight: '600', color: 'white'}}
              onPress={() => onSend()}>
              SEND
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgetPass;

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
    height: 300,
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

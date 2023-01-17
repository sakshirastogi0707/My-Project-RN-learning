import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from '../common/icon';
import {useNavigation} from '@react-navigation/native';
import InputBox from '../common/InputBox';
import {postToServer} from '../utils/services';
import storage from '../utils/storage';

const AddMoney = props => {
  const navigation = useNavigation();
  const [Amount, setAmount] = useState('');
  const [wallet, setWallet] = useState();
  const [lowBalance, serLowBalance] = useState();

  const AddAmount = async () => {
    const TOKEN = await storage.getItem('authToken');
    console.log(TOKEN);
    try {
      const requestParams = {
        amount: Amount,
      };
      const response = await postToServer('addMoney', requestParams, TOKEN);
      if (response.status) {
        navigation.navigate('walletBal');

        console.log(props?.route?.params?.AmountArrear);
        console.log(wallet, '........................wallet.');
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBalance();
  }, []);

  const getBalance = () => {
    setWallet(props?.route?.params?.AmountArrear);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.parentContainer}>
        <TouchableOpacity
          style={{
            width: 25,
            height: 25,
            position: 'absolute',
            right: 0,
            marginTop: 30,
          }}
          activeOpacity={0.8}>
          <Image style={{width: 20, height: 25}} source={Icons.cross} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            marginTop: 70,
            color: 'white',
          }}>
          Wallet Balence
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: 200,
          }}>
          {wallet < 100 ? (
            <Text
              style={{
                fontSize: 45,
                fontWeight: '300',
                lineHeight: 50,
                color: '#FF4343',
              }}>
              ₹{wallet}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 45,
                fontWeight: '300',
                lineHeight: 50,
                color: 'white',
              }}>
              ₹{wallet}
            </Text>
          )}
          {wallet < 100 ? (
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                color: '#FF4343',
              }}>
              Low Balence
            </Text>
          ) : null}
        </View>
        <Text style={{fontSize: 15, fontWeight: '500'}}>Topup Wallet</Text>
      </View>
      <View
        style={{
          width: '90%',
          height: 150,
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <InputBox
          placeholder="₹ Enter Amount"
          onChangeText={text => setAmount(text)}
          value={Amount}
        />
        <TouchableOpacity
          style={{
            width: 350,
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 14,
            backgroundColor: '#FFFFFF',
          }}
          onPress={() => AddAmount()}>
          <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 14}}>
            PROCEDD TO ADD BALENCE
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddMoney;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1E201F',
  },
  parentContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonHeader2 from '../common/CommonHeader2';
import {getFromServer} from '../utils/services';
import storage from '../utils/storage';
import {useNavigation} from '@react-navigation/native';

const walletBal = props => {
  const navigation = useNavigation();
  const [amountArrear, setAmountArrear] = useState('');
  useEffect(() => {
    UserDetails();
  }),[];
  const UserDetails = async () => {
    try {
      const TOKEN = await storage.getItem('authToken');
      const getResponse = await getFromServer('me', TOKEN);
      if (getResponse.status) {
        setAmountArrear(getResponse?.user?.employee.amount_arrear);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.Container}>
      <CommonHeader2 />
      <View style={styles.titleContainer}>
        <Text style={{fontWeight: '700', fontSize: 16, lineHeight: 40}}>
          Current Wallet Balance
        </Text>
        <Text
          style={{
            fontWeight: '300',
            fontSize: 45,
            lineHeight: 80,
            letterSpacing: 1.5,
          }}>
          ₹{amountArrear}
        </Text>
        <TouchableOpacity
          style={{
            width: 162,
            backgroundColor: '#AB5AB4',
            height: 31,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AddMoney',{AmountArrear:amountArrear})}>
          <Text style={{fontSize: 12, fontWeight: '700'}}>Add Money</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#3D3D3D',
          marginTop: 30,
        }}></View>
    </SafeAreaView>
  );
};

export default walletBal;
const styles = StyleSheet.create({
  Container: {
    flex: 1, 
  },
  titleContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
});

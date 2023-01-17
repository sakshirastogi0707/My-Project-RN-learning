import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import ProfileHeader from '../common/ProfileHeader';
import HRMButton from '../common/HRMButton';
// import {useNavigation} from '@react-navigation/native';
import {postToServer} from '../utils/services';
import {getFromServer} from '../utils/services';
import { useNavigation } from '@react-navigation/native';
const Profile = props => {
  const navigation = useNavigation();
  const [totalHour, setTotalHour] = useState();
  const [actualTime, setActualTime] = useState();
  const [leaveBal, setLeaveBal] = useState();
  const [name, setName] = useState();
  const [breakIn, setBreakIn] = useState();
  const [breakOut, setBreakOut] = useState();

  useEffect(() => {
    if (props?.route?.params?.accessToken)
      WorkedMonthsApi(props?.route?.params?.accessToken);
    leaveBalance(props?.route?.params?.accessToken);
    const user_Name = props?.route?.params?.name;
    setName(user_Name);
    console.log(props?.route?.params?.accessToken, 'ttttttt');
  }, []);
  //----------------------------Worked month api--------------------------
  const WorkedMonthsApi = async token => {
    try {
      const GetResponse = await getFromServer('worked-month', token);
      if (GetResponse?.status) {
        setTotalHour(GetResponse?.data.total_hour);
        setActualTime(GetResponse?.data?.actual_time);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //-------------------Leave Balance APi------------------------------------
  const leaveBalance = async token => {
    try {
      const GetLeaveResponse = await getFromServer('leaveBalance', token);
      if (GetLeaveResponse.status) {
        setLeaveBal(GetLeaveResponse.data.leave_balance);
        console.log(GetLeaveResponse.data.leave_balance);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //-------------------------Break in APi------------------------------------
  const BreakIn = async token => {
    try {
      const BreakinResponse = await postToServer('breakin', '', token);
      console.log(BreakinResponse, '.........break in api response');
      if (response?.status) {
        console.log('SUCCESSSSSSSS');
      }
    } catch (err) {
      console.log(err);
    }
  };
  //- --------------------------------BreakOUT API---------------------------------------
  const BreakOut = async token => {
    try {
      const breakoutResponse = await postToServer('breakout', '', token);
      console.log(breakoutResponse);
    } catch (err) {
      console.log(err);
    }
  };
  const breakTime = token => {
    if (breakIn) {
      BreakOut(token);
      setBreakIn(false);
      setBreakOut(true);
    } else {
      BreakIn(token);
      setBreakIn(true);
      setBreakOut(false);
    }
  };
  //--------------------------------------------Break-condition-----------------------------------

  return (
    <SafeAreaView style={styles.Container}>
      <ProfileHeader onPress={()=>navigation.navigate('walletBal')} />
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <Image
          style={{
            width: 446,
            height: 595,
            position: 'absolute',
            alignSelf: 'flex-start',
          }}
          source={require('../Images/profile1.png')}
        />
        <View style={{width: '50%', height: '35%'}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: '600',
              lineHeight: 40,
              marginTop: 30,
            }}>
            Hello!
          </Text>
          <Text style={{fontSize: 40, fontWeight: '700', lineHeight: 40}}>
            {name}
          </Text>
        </View>
        <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 18}}>
          Today's Break!
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '30%',
            // backgroundColor: "red"
          }}>
          <Text style={{fontSize: 30, fontWeight: '700', marginBottom: 30}}>
            40
          </Text>
          <Text style={{fontSize: 30, Bottom: 30}}>Mins</Text>
        </View>

        <HRMButton
          text={breakIn ? 'Break out' : 'Break in'}
          onPress={() => breakTime(props?.route?.params?.accessToken)}
        />
        <View style={styles.mainView}>
          <View style={styles.childView1}>
            <Text
              style={{
                fontSize: 18,
                color: '#FFFFFF',
                fontWeight: 'bold',
                lineHeight: 25,
              }}>{`${'Worked \nthis month'}`}</Text>
            <Text
              style={{
                fontSize: 30,
                color: '#FFFFFF',
                fontWeight: '300',
                lineHeight: 80,
              }}>
              {`${actualTime}/${totalHour}`}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                fontWeight: '400',
                opacity: 0.6,
                lineHeight: 20,
              }}>
              Hours
            </Text>
          </View>
          <View style={styles.childView2}>
            <Text
              style={{
                fontSize: 18,
                color: '#1E201F',
                fontWeight: '800',
                lineHeight: 25,
              }}>
              {`${' Leave Balance'}`}
            </Text>
            <Text style={{fontSize: 45, fontWeight: '300', lineHeight: 80}}>
              {leaveBal}
            </Text>
          </View>
        </View>
        <View style={styles.Container2}>
          <View style={styles.SubContainer}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>Cake cutting</Text>
            <Text style={{fontSize: 16, fontWeight: '600'}}>Dec 18</Text>
          </View>
          <View style={{width: '80%', height: '40%', alignSelf: 'center'}}>
            <Text style={{color: '#878787', fontWeight: '400', fontSize: 15}}>
              cake cutting ceremony for sakshi varma will be held at 4:00 PM
              today
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ScrollView: {
    width: '90%',
    alignSelf: 'center',
  },
  mainView: {
    width: '100%',
    height: '40%',
    // backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    alignItems: 'flex-end',
  },
  childView1: {
    width: '47%',
    height: '90%',
    backgroundColor: '#000000',
    borderRadius: 25,
    padding: 20,
  },
  childView2: {
    width: '47%',
    height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    padding: 30,
  },
  SubContainer: {
    width: '80%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },

  Container2: {
    width: '100%',
    height: '20%',
    borderRadius: 35,
    backgroundColor: '#FBFBFB',
    marginTop: 20,
  },
});

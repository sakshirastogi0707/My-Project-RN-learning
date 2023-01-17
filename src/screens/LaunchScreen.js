import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {Icons} from '../common';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../themes';
import Swiper from 'react-native-swiper';
import Button from '../common/Button';
 import { useNavigation } from '@react-navigation/native';

export default function LaunchScreen(){
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parentContainer}>
        <View style={styles.IconContainer}>
          <Image style={styles.Image} source={Icons.resorsa} />
        </View>
        <Text
          style={{
            color: Colors.Purple,
            fontSize: 14,
            fontWeight: '400',
          }}>
          More then a wallet
        </Text>
        <Swiper style={styles.Wrapper} dot={<View style={styles.activeDot} />}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Make paying easier with doughfi.</Text>
          </View>
          <View style={styles.slide1}>
            <Text style={styles.text}>Make paying easier with doughfi.</Text>
          </View>
          <View style={styles.slide1}>
            <Text style={styles.text}>Make paying easier with doughfi.</Text>
          </View>
        </Swiper>
        <Button title={'GET STARTED'}  onPress= {()=>{navigation.navigate('SelectUser')}}/>
        <View style={styles.MsgContainer}>
          <Text style={styles.MsgText}>Already have an account?</Text>
          <Text style={[styles.MsgText,{color: Colors.Purple}]}> Sign in</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  parentContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  Image: {
    width: 200,
    height: 210,
    alignSelf: 'center',
  },
  IconContainer: {
    height: '45%',
    justifyContent: 'center',
  },
  Wrapper: {
    height: '70%',
    // backgroundColor: "red"
  },
  slide1: {
    width: '90%',
    height: '50%',
    justifyContent: 'center',
    // padding: 20
  },
  text: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 1.5
  },
  activeDot: {
    width: 9,
    height: 9,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    borderWidth: 2,
    borderColor: Colors.Purple,
  },
  MsgContainer: {
    // width: '90%',
    height: '10%',
    // backgroundColor: "red",
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  MsgText: {
    fontSize: 14,
  },
});

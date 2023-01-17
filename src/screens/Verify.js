import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icons} from '../common';
import Button from '../common/Button';
import { useNavigation } from '@react-navigation/native';
const verify = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.mainContainer}>
        <View style={styles.ImageContainer}>
          <Image style={styles.Image} source={Icons.Livello} />
        </View>
        <Text style={styles.Text}>{`Veriy \nyour identity \nto continue`}</Text>
        <View style={styles.ButtonContainer}>
          <Button title="PROCEED" onPress={()=> navigation.navigate('ReqHeader')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default verify;

const styles = StyleSheet.create({
  mainContainer: {
    width: '80%',
    height: '100%',
    // backgroundColor: "green",
    alignSelf: 'center',
  },
  ImageContainer: {
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: "red"
  },
  Image: {
    width: 160, 
    height: 300,
  },
  Text: {
    fontSize: 40,
    fontWeight: '800',
  },
  ButtonContainer: {
    marginTop: 70,
  },
});

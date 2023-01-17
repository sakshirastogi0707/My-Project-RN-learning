import {
  // ScrollView,
  StyleSheet,
  Text,
  View,
  // Image,
  // TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../common/Header';
import Colors from '../themes/Colors';
import HalfButton from '../common/HalfButton';
import {useNavigation} from '@react-navigation/native';
const SelectUser = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Header Title="SIGN UP" />
      <View style={styles.infoContainer}>
        <Text style={styles.TextStyle}>Account Type</Text>
        <Text
          style={
            styles.TextStyle1
          }>{`${'Are you an \nIndividual or a Business?'}`}</Text>
      </View>
      <HalfButton
        title1="MERCHANT"
        title2="INDIVIDUAL"
        onPress={() => navigation.navigate('Signup')}
      />
    </SafeAreaView>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Black,
  },

  TextStyle: {
    // backgroundColor: 'green',
    fontSize: 16,
    color: Colors.Purple,
    fontWeight: '300',
  },
  TextStyle1: {
    color: Colors.white,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 1.0,
  },

  infoContainer: {
    width: '85%',
    height: '18%',
    alignSelf: 'center',
    //   backgroundColor: "yellow",
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

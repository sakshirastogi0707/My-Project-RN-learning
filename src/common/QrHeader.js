import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Icons from '../common/icon';

const QrHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Image style={{width: 15, height: 20}} source={Icons.Arrow} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.headerOpacityStyle} activeOpacity={0.8}>
        <View style={styles.borderLine}>
          <Image
            style={{width: 30, height: 30, borderRadius: 8}}
            source={require('../Images/profile.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default QrHeader;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '10%',
    // backgroundColor: "green",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },

  borderLine: {
    width: 40,
    height: 40,
    color: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

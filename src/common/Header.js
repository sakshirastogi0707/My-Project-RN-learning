import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from './icon';
import {useNavigation} from '@react-navigation/native';
const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity
        style={{width: '10%', height: 30}}
        activeOpacity={0.8}
        onPress={() => 
          navigation.goBack()
        }>
        <Image style={styles.Image} source={Icons.Arrow} />
      </TouchableOpacity>
      <Text style={styles.text}>{props.Title}</Text>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  HeaderContainer: {
    width: '90%',
    height: 80,
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Image: {
    width: 12,
    height: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

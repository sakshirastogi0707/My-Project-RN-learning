import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';

const ListTitle = props => {
  return (
    <View style={styles.Container}>
      <Text
        style={{
          color: Colors.Purple,
          padding: 20,
          fontSize: 14,
          fontWeight: '500',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ListTitle;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 60,
    backgroundColor: '#626271',
    justifyContent: 'center',
    //  alignItems: "center",
  },
});

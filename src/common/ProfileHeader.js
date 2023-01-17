import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from 'react';
const ProfileHeader = (props) => {
  return (
      <View style={styles.headerView}>
        <TouchableOpacity style={{}} >
          <Image source={require('../Images/logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{}} onPress={props.onPress}>
          <Image source={require("../Images/Bell.png")} />
        </TouchableOpacity>
      </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({

  headerView: {
    width: "90%",
    height: "10%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "red"
  },
});

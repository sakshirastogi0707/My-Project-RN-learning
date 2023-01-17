import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
import Icons from './icon'
  const Header = () => {
    const navigation = useNavigation()
    return (
      // <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.headerOpacityStyle} activeOpacity={0.8} onPress={()=>navigation.goBack()}>
          <Image
            style={{ width: 15, height: 25 }}
            source={Icons.Arrow}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerOpacityStyle} activeOpacity={0.8} onPress={()=>navigation.navigate('Profile')}>
          <View style={styles.borderLine}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 8 }}
              source={Icons.profile}
            />
          </View>
        </TouchableOpacity>
      </View>
      //  </SafeAreaView>
    );
  };
  
  export default Header;
  
  const styles = StyleSheet.create({
    container: {
      height: 100,
      // backgroundColor : "red"
    },
    headerView: {
      width: "90%",
      height: "10%",
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor: "red",
      alignSelf: "center",
      alignItems: "center",
    },
    headerOpacityStyle: {
      //  backgroundColor: "black",
    },
    borderLine: {
      width: 40,
      height: 40,
      color: "black",
      borderWidth: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
  });
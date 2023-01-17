import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import Icons from './icon';
import Colors from '../themes/Colors';
import InputField from './InputField';
import ListTitle from './ListTitle';

// const Data = [
//   {
//     id: '1',
//     shortName: "JS",
//     name: 'Jack Sparrow',
//     Email: 'jacksparrow@gmai.com',
//   },
//   {
//     id: '2',
//     shortName: "JS",
//     name: 'Jack Sparrow',
//     Email: 'jacksparrow@gmai.com',
//   },
//   {
//     id: '3',
//     shortName: "JS",
//     name: 'Jack Sparrow',
//     Email: 'jacksparrow@gmai.com',
//   },
//   {
//     id: '4',
//     shortName: "JS",
//     name: 'Jack Sparrow',
//     Email: 'jacksparrow@gmai.com',
//   },
//   {
//     id: '5',
//     shortName: "JS",
//     name: 'Jack Sparrow',
//     Email: 'jacksparrow@gmai.com',
//   },
// ];
const ReqHeader = () => {
//   const item=({item , index})=>{
// return(
//   <>
//   <View style={styles.ListContainer}>
//     <View style={styles.shortNameContainer}>
//     <Text style={{}}>{item.shortName}</Text>

//        </View>
//     <View style={styles.NameContainer}>
//       <Text style={{fontSize: 18}}>{item.name}</Text>
//       <Text style={{color: Colors.Purple}}>{item.Email}</Text>
//       </View>
//       <TouchableOpacity style={styles.TouchableOpacity}>
//         <Image source={Icons.Plus}/>
//       </TouchableOpacity>
  
//   </View>
//   </>
// );
  // }
  return (
    <View style={styles.requestContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.TouchableOpacityIcon}>
          <Image style={styles.Image} source={Icons.Arrow} />
        </TouchableOpacity>
        <Text style={{width: '55%', fontSize: 25}}>$55.00</Text>
        <TouchableOpacity
          style={styles.TouchableOpacityBtn}
          activeOpacity={0.8}>
          <Text style={styles.text}>REQUEST</Text>
        </TouchableOpacity>
      </View>
     </View>
  );
};

export default ReqHeader;

const styles = StyleSheet.create({
  Image: {
    width: 12,
    height: 20,
  },
  TouchableOpacityIcon: {
    width: '10%',
    // backgroundColor: "red"
  },
  requestContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  TouchableOpacityBtn: {
    width: 120,
    height: 44,
    backgroundColor: Colors.DarkPurple,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"blue",
    alignItems: 'center',
  },
  
});

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import HrmHeader from '../common/HrmHeader';
import {useNavigation} from '@react-navigation/native';
import Swipeout from 'react-native-swipeout';

const Data = [
  {
    id: '1',
    image: require('../Images/meeting.png'),
    name: 'Meeting Room',
    date: 'Dec 13 - Dec 28',
    attempt: 'DAILY',
    time: '5:30 to 6:00 PM',
    title: 'Design team standup call',
  },
  {
    id: '2',
    image: require('../Images/meeting.png'),
    name: 'Meeting Room',
    date: 'Dec 13 - Dec 28',
    attempt: 'DAILY',
    time: '5:30 to 6:00 PM',
    title: 'Design team standup call',
  },
  {
    id: '3',
    image: require('../Images/meeting.png'),
    name: 'Meeting Room',
    date: 'Dec 13 - Dec 28',
    attempt: 'DAILY',
    time: '5:30 to 6:00 PM',
    title: 'Design team standup call',
  },
  {
    id: '4',
    image: require('../Images/meeting.png'),
    name: 'Meeting Room',
    date: 'Dec 13 - Dec 28',
    attempt: 'DAILY',
    time: '5:30 to 6:00 PM',
    title: 'Design team standup call',
  },
];

const MyBooking2 = () => {
  var swipeoutBtns = [
    {
      text: 'Button',
      backgroundColor: 'red',
      component: (
        <View
          style={{
            //   alignItems: 'center',
            //   justifyContent: 'center',
            //   flexDirection: 'column',
            width: 50,
            height: 30,
            backgroundColor:'green'
          }}></View>
      ),
      backgroundColor: 'red',
      //   underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    },
  ];
  const navigation = useNavigation();
  const item = ({item, index}) => {
    return (
      <View style={{alignItems:'center',backgroundColor:'pink',width:'100%'}}>
        <Swipeout
          right={swipeoutBtns}
          backgroundColor="transparent"
          style={{ height: 200, borderRadius: 50, marginTop: 20,width:'90%',alignSelf:'center'}}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            onPress={() => navigation.navigate('MyBooking')}>
            <View style={styles.headingView}>
              <Image source={item.image} />
              <View style={{}}>
                <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 35}}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 14, color: '#878787', lineHeight: 15}}>
                  {item.date}
                </Text>
                <Text style={{fontSize: 14}}>{item.attempt}</Text>
                <Text style={{fontSize: 14, color: '#878787', lineHeight: 35}}>
                  {item.time}
                </Text>
              </View>
            </View>
            <Text style={{marginLeft: 25, fontSize: 15}}>{item.title}</Text>
          </TouchableOpacity>
        </Swipeout>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <HrmHeader />
      <ScrollView contentContainerStyle={styles.scrollstyle}>
        <Text style={styles.headingStyle}>My Bookings</Text>
        <FlatList
          data={Data}
          renderItem={item}
          keyExtractor={item => item.id}></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBooking2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  headingStyle: {
    fontSize: 26,
    fontWeight: '600',
    width: '90%',
    alignSelf: 'center',
    lineHeight: 28,
    backgroundColor: "red"
  },
  TouchableOpacityStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FBFBFB',
    alignSelf: 'center',
    //  marginBottom: 20,
    borderRadius: 30,
    shadowColor: '#ddd',
    shadowOpacity: 1,
    // marginTop: 10,
  },
  headingView: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    padding: 15,
    // backgroundColor: "pink"
  },
});

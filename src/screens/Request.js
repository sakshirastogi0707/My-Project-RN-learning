import { StyleSheet, Text, View ,ScrollView, SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import ReqHeader from '../common/ReqHeader'
import InputField from '../common/InputField'
import ListTitle from '../common/ListTitle'
import Colors from '../themes/Colors'
import Icons from '../common/icon'

const Data = [
  {
    id: '1',
    shortName: "JS",
    name: 'Jack Sparrow',
    Email: 'jacksparrow@gmai.com',
  },
  {
    id: '2',
    shortName: "JS",
    name: 'Jack Sparrow',
    Email: 'jacksparrow@gmai.com',
  },
  {
    id: '3',
    shortName: "JS",
    name: 'Jack Sparrow',
    Email: 'jacksparrow@gmai.com',
  },
  {
    id: '4',
    shortName: "JS",
    name: 'Jack Sparrow',
    Email: 'jacksparrow@gmai.com',
  },
  {
    id: '5',
    shortName: "JS",
    name: 'Jack Sparrow',
    Email: 'jacksparrow@gmai.com',
  },
];
const Request = () => {

  const item=({item , index})=>{
    return(
      <>
      <View style={styles.ListContainer}>
        <View style={styles.shortNameContainer}>
        <Text style={{}}>{item.shortName}</Text>
    
           </View>
        <View style={styles.NameContainer}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
          <Text style={{color: Colors.Purple}}>{item.Email}</Text>
          </View>
          <TouchableOpacity style={styles.TouchableOpacity}>
            <Image style={{width: 15, height: 20}} source={Icons.Plus}/>
          </TouchableOpacity>
      
      </View>
      </>
    );
      }
  return (
   <SafeAreaView style={styles.Container}>
<ReqHeader/>
<View style={{height: 15}}></View>
      <InputField placeholder=" Name, Phone, Email" />
      <InputField placeholder=" Add a value" />
      <View style={{height: 15}}></View>
      <ListTitle title="Suggested" />
      <ScrollView contentContainerStyle={styles.ScrollView}>
        <FlatList
          data={Data}
          renderItem={item}
          keyExtractor={item => item.id}></FlatList>
      </ScrollView>
   </SafeAreaView>
  )
}

export default Request

const styles = StyleSheet.create({
  Container: {
    width: "100%"
  },
  ListContainer: {
    width: "90%",
    flexDirection: "row",
    marginVertical: 20,
    alignSelf:"center"
    
  },
  TouchableOpacity:{
  width: 40,
  height: 40,
  borderRadius: 25,
  backgroundColor :"#3B3B4D",
  justifyContent: "center",
  alignItems: "center"
  },
  shortNameContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor : Colors.DarkPurple,
      justifyContent: "center",
      alignItems: "center"
    },
    NameContainer: {
      width: "65%",
      height: 50,
      flexDirection: "column",
      justifyContent: "space-between",
      // backgroundColor: "red",
      justifyContent: "center",
      marginLeft: 10
    }
  
})
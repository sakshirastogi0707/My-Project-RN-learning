import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React,{useEffect,useState} from "react";
import Header from "../common/CommonHeader2";
import { getFromServer } from "../utils/services";


const Data = [
  {
    id: "1",
    title: "Casual",
    Leave: "4.5/12",
  },
  {
    id: "2",
    title: "Sick",
    Leave: "5/8",
  },
  {
    id: "3",
    title: "Emergency",
    Leave: "1.5/4",
  },
  {
    id: "4",
    title: "Paternity",
    Leave: "3/3",
  },
  {
    id: "5",
    title: "Maternity",
    Leave: "3/3",
  },
  {
    id: "6",
    title: "Marriage",
    Leave: "5/5",
  },
];
const List = [
  {
    id: "1",
    Cdate: "09",
    name: "Emergncy",
    Cmonth: "DEC",
    Sdate: "DEC 18",
    Edate: "DEC 20",
    Purpose: "Brother in hospital",
  },
  {
    id: "2",
    Cdate: "09",
    name: "Emergncy",
    Cmonth: "DEC",
    Sdate: "DEC 18",
    Edate: "DEC 20",
    Purpose: "Brother in hospital",
  },
  {
    id: "3",
    Cdate: "09",
    name: "Emergncy",
    Cmonth: "DEC",
    Sdate: "DEC 18",
    Edate: "DEC 20",
    Purpose: "Brother in hospital",
  },
  {
    id: "3",
    Cdate: "09",
    name: "Emergncy",
    Cmonth: "DEC",
    Sdate: "DEC 18",
    Edate: "DEC 20",
    Purpose: "Brother in hospital",
  },
  {
    id: "3",
    Cdate: "09",
    name: "Emergncy",
    Cmonth: "DEC",
    Sdate: "DEC 18",
    Edate: "DEC 20",
    Purpose: "Brother in hospital",
  },
];

const item = ({ item, index }) => {
  return (
    <View style={styles.ListContainer}>
      <Text style={{ fontSize: 15, fontWeight: "400" }}>{item.title}</Text>
      <Text style={styles.ListElement}>{item.Leave}</Text>
    </View>
  );
};
const item2 = ({ item }) => {
  return (
    <View
      style={{
        width: "90%",
        height: 130,
        // backgroundColor: "pink",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 12,
        borderBottomColor: "#C4C4C4",
        backgroundColor: "#FBFBFB",
        borderBottomWidth: 10,
        marginVertical: 20,
        // marginTop:
      }}
    >
      <View style={{ width: "20%", height: "50%", marginLeft: 30 }}>
        <Text style={{ fontSize: 24, lineHeight: 30 }}>{item.Cdate}</Text>
        <Text style={{ fontSize: 24 }}>{item.Cmonth}</Text>
      </View>
      <View style={{ width: "40%", height: "60%", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>{item.name}</Text>
        <Text style={{ fontSize: 15, color: "#878787" }}>{item.Purpose}</Text>
      </View>
      <View style={{ width: "20%", height: "40%" }}>
        <Text style={{ fontSize: 15 }}>{item.Sdate}</Text>
        <Text style={{ fontSize: 15 }}>{item.Edate}</Text>
      </View>
    </View>
  );
};

const LeaveDetails2 = (props) => {
  const [total , setTotal] = useState('');
  useEffect(()=>{
  if (props?.route?.params?.accessToken){
    LeaveBalance(props?.route?.params?.accessToken);
  }

  },[])
  const LeaveBalance = async(token)=>{
    const response = await getFromServer('transaction', token);
    if(response.status){
const Total = response.transaction.total
setTotal(Total)
    }
  }
  return (
    <SafeAreaView style={styles.Container}>
      <Header />
      <View style={styles.HeadingView}>
        <Text style={styles.title}>Total Leaves</Text>
        <Text style={styles.NumOfLeaves}>{total}</Text>
      </View>
      {/* <ScrollView contentContainerStyle={styles.ScrollView}> */}
      <View style={{ height: "15%" }}>
        <FlatList
          style={{ width: "100%", height: "100%" }}
          horizontal={true}
          data={Data}
          renderItem={item}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* </ScrollView> */}
      <Image
        style={{ width: 430, height: 5 }}
        source={require("../Images/ImgLine.png")}
      />
      <ScrollView style={{ width: "90%", alignSelf: "center" }}>
        <FlatList
          data={List}
          renderItem={item2}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaveDetails2;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // alignSelf: "center"
  },
  HeadingView: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1E201F",
  },
  NumOfLeaves: {
    fontSize: 45,
    fontWeight: "300",
    color: "#1E201F",
  },
  ScrollView: {
    width: "90%",
    backgroundColor: "green",
    alignSelf: "center",
    flex: 1,
  },
  ListContainer: {
    width: "60%",
    flex: 1,
    marginHorizontal: 20,
    // backgroundColor: "red",
    marginTop: 40,
  },
  ListElement: {
    fontSize: 21,
    fontWeight: "500",
    color: "#000000",
    lineHeight: 25,
  },
});
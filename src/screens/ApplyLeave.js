import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import Button from '../common/Button';
import CommonHeader2 from '../common/CommonHeader2';
import Icons from '../common/icon';
import InputField from '../common/InputField';
import DatePicker from 'react-native-date-picker';

const ApplyLeave = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [open1, setOpen1] = useState(false);

  const OnPress1 = () => {
    setOpen1(true);
  };
  onChangeText1 = () => {
    date1 => setDate1(date1);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <CommonHeader2 />
      <Button title="OPEN" onPress={() => setShow(true)} />
      <Modal visible={show} animationType={'slide'} transparent={false}>
        <View style={styles.ModalContainer}>
          <View style={styles.titleContainer}>
            <Text style={{fontSize: 25, fontWeight: '600'}}>Apply Leave</Text>
            <TouchableOpacity style={{}} onPress={() => setShow(false)}>
              <Image style={{width: 20, height: 25}} source={Icons.cross} />
            </TouchableOpacity>
          </View>
          <InputField
            source={Icons.DateIcon}
            OnPress={() => setOpen(true)}
            onChangeText={date => setDate(date)}
            value={date.toDateString()}
          />
          <DatePicker
            dateFormat="MM-DD-YYYY"
            mode="date"
            modal={true}
            fadeToColor="yellow"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
            onDateChange={() => setDate(date)}
          />
          <InputField
            source={Icons.DateIcon}
            OnPress={() => OnPress1()}
            onChangeText={date => setDate(date)}
            value={date1.toDateString()}
          />
          <DatePicker
            dateFormat="MM-DD-YYYY"
            mode="date"
            modal={true}
            fadeToColor="yellow"
            open={open1}
            date={date1}
            onConfirm={date1 => {
              setOpen1(false);
              setDate1(date1);
            }}
            onCancel={() => {
              setOpen1(false);
            }}
            onDateChange={() => setDate1(date)}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ApplyLeave;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
  },
  ModalContainer: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 100,
    borderRadius: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

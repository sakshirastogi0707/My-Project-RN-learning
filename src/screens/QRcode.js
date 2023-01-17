import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import QrHeader from '../common/QrHeader';
import CommonModal from '../common/CommonModal';


const QRcode = () => {
  return (
    <SafeAreaView style={styles.container}>
      <QrHeader />
      <CommonModal 
      text="Scan QR code"
      text1="place qr code inside the frame to scan please avoid shake to get results quickly "
      />
    </SafeAreaView>
  );
};

export default QRcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

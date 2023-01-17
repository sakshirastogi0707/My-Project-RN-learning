import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../common/Button';
import Icons from './icon';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const commonModal = props => {
  const [show, setShow] = useState(false);
  const onclick = () => {
    setShow(true);
  };
const onSuccess = (e) => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="OPEN" onPress={() => onclick()} />
      <Modal animationType={'slide'} transparent={false} visible={show}>
        <View style={styles.ModalContainer}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
              lineHeight: 60,
            }}>
            {props.text}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: 25,
            }}>
            {props.text1}
          </Text>
        </View>
        <QRCodeScanner
          onRead={onSuccess}
          // flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </Modal>
    </SafeAreaView>
  );
};

export default commonModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  ModalContainer: {
    width: '100%',
    height: 600,
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    borderRadius: 25,
  },
  image: {
    width: 150,
    height: 160,
    marginTop: 80,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

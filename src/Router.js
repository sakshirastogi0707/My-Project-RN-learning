import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LaunchScreen from './screens/LaunchScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectUser from './screens/SelectUser';
import Signup from './screens/Signup';
import SignupLayout2 from './screens/SignupLayout2';
// import ModalContainer from './screens/ModalContainer';
import CommonModal from './common/CommonModal';
// import Verify from './screens/Verify';
import Request from './screens/Request';
import HrmLogin from './screens/HrmLogin';
import Profile from './screens/Profile';
import QRcode from './screens/QRcode';
import ReqHeader from './common/ReqHeader';
import ApplyLeave from './screens/ApplyLeave';
import ForgetPass from './screens/ForgetPass';
import NewPass from './screens/NewPass';
import LeaveBal from './screens/LeaveBal';
import walletBal from './screens/walletBal';
import AddMoney from './screens/AddMoney';
import MyBookings from './screens/MyBookings';
const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MyBookings">
        <Stack.Screen
          name="LaunchScreen"
          component={LaunchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectUser"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupLayout2"
          component={SignupLayout2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CommonModal"
          component={CommonModal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Request"
          component={Request}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HrmLogin"
          component={HrmLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QRcode"
          component={QRcode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ApplyLeave"
          component={ApplyLeave}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPass"
          component={ForgetPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LeaveBal"
          component={LeaveBal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="walletBal"
          component={walletBal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddMoney"
          component={AddMoney}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyBookings"
          component={MyBookings}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

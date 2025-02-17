import React from 'react';
import {View, Text} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

/*
  Custom Toast Configuration
*/
const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green', backgroundColor: '#E0FBE0'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{fontSize: 16, fontWeight: 'bold', color: 'green'}}
      text2Style={{fontSize: 14, color: '#333'}}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red', backgroundColor: '#FBE0E0'}}
      text1Style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}
      text2Style={{fontSize: 14, color: '#333'}}
    />
  ),

  warning: ({text1, text2}) => (
    <View
      style={{
        height: 60,
        width: '95%',
        backgroundColor: '#FFD700',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 10,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: '#333'}}>
        ⚠️ {text1}
      </Text>
      <Text style={{fontSize: 14, color: '#555'}}>{text2}</Text>
    </View>
  ),

  tomatoToast: ({text1, props}) => (
    <View
      style={{
        height: 60,
        width: '95%',
        backgroundColor: 'tomato',
        borderRadius: 8,
        padding: 10,
        marginHorizontal: 10,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
        {text1}
      </Text>
      <Text style={{fontSize: 14, color: 'white'}}>{props.uuid}</Text>
    </View>
  ),
};

// Exporting Toast Component
const CustomToast = () => {
  return <Toast config={toastConfig} />;
};

export default CustomToast;

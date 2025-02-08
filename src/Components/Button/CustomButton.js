import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = (props) => {
  const {title, onPress, gradientColor, start, end, style} = props
  // console.log(props)
  return (
    <>
          <TouchableOpacity  onPress={onPress} elevation={8}>
                <LinearGradient  
                colors={gradientColor}
                start={start} 
                end={end} 
                style={style[0]}>
                  <View>
                    <Text style={style[1]}>{title}</Text>
                  </View>
                </LinearGradient>
           </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  gradient: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomButton;

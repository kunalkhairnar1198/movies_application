import React from 'react';
import { View,  StyleSheet, Text, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import TextInput from '../../Components/Input/Textinput';
import IMAGES from '../../constants/images';
import  COLORS  from '../../constants/colors';
import FONT_SIZES from '../../constants/text';
import CustomButton from '../../Components/Button/CustomButton';
import Toast from 'react-native-toast-message';

const Singup = () => {

  const navigation =useNavigation()


  let userSchema = Yup.object({
    name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Please enter your name"),


    email:Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),

    number: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Please enter your mobile number"),

    password:Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password"),

    confirmPassword:Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Please confirm your password")
  });

   const showToast = () => {
      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Register Succesfull',
        position: 'top',
        visibilityTime: 5000, 
      });
    };

  console.log('SIGNUP')
  return (
    <ImageBackground source={IMAGES.BG_LOGIN_IMG} style={styles.background} resizeMode='cover'>
    <LinearGradient
        colors={['#14181e', '#1c253254']}
        start={{ x: 0, y: 1 }} 
        end={{ x: 0, y: 0 }} 
        style={styles.linearGradient}
      >
      <Text style={styles.title}>Singup</Text>
        <Formik
          initialValues={
            { 
            name: "",
            email: "",
            number: "",
            password: "",
            confirmPassword:"", 
            }
          }
          validationSchema={userSchema}
          onSubmit={(values,{resetForm}) => {
            showToast()
            console.log("Singup form values",values)
            resetForm()
          }}
        >
          {({ handleSubmit }) => (
            <View style={styles.form}>
              <TextInput name="name" placeholder="Enter the name" keyboardType="default" />
              <TextInput name="email" placeholder="Enter the email" keyboardType="email-address" />
              <TextInput name="number" placeholder="Enter the Mobile number" keyboardType="number-pad" />
              <TextInput name="password" placeholder="Enter the password" secureTextEntry />
              <TextInput name="confirmPassword" placeholder="Enter the confirm password" secureTextEntry />
              <CustomButton
                onPress={handleSubmit}
                style={[styles.button, styles.buttontxt]}
                title={'Sign Up'}
                useGradient={true}
                gradientColor={COLORS.GRADIENT_PRIMARY}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
              />
            </View>
          )}
        </Formik>
        <View style={styles.bottomsection}>
        <TouchableWithoutFeedback style={styles.navigatesignup} onPress={()=>(navigation.navigate('SignIn'))}>
          <Text style={styles.link}>Already have an account ? 
            <Text style={styles.signup}>
            Sing In
            </Text>
          </Text>
        </TouchableWithoutFeedback>
        </View>
    </LinearGradient>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',  
    width: '100%',
    height: '100%',

  },
  linearGradient: {
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    paddingHorizontal: 15,
    paddingVertical: 150,
  },
  title: {
    color: COLORS.TEXT_PRIMARY,
    alignSelf: 'center',
    marginVertical: 50,
    fontSize: FONT_SIZES.APP_TITLE + 5,
    fontWeight: 'bold',
    padding: 10,
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    padding: 13,
    borderRadius: 30,
    alignItems: 'center',
    elevation:5,
    shadowColor: "#282828"
  },
  buttontxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },
  bottomsection: {
    alignItems: 'center',
    paddingVertical:20,
  },
  link: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
  },
  navigatesignup: {
    marginVertical: 20,
  },
  signup: {
    color: '#0000f8',
    fontSize: 15,
    fontWeight: '500',
  },
});


export default Singup;

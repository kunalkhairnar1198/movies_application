import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import TextInput from '../../Components/Input/Textinput';
import IMAGES from '../../constants/images';
import COLORS from '../../constants/colors';
import FONT_SIZES from '../../constants/text';
import CustomButton from '../../Components/Button/CustomButton';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import {authActions} from '../../Store/auth-slice/authslice';

const Signin = () => {
  const naviagation = useNavigation();
  const dispatch = useDispatch();
  const registerUsers = useSelector(state => state.auth.users);
  // console.log(registerUsers)

  let userSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Please Enter the email'),
    password: Yup.string()
      .min(6, 'Must be 6+ chars')
      .required('Please enter the password'),
  });

  const loginHandle = (values, resetForm) => {
    console.log(values);
    const newlogedinuser = values;

    const foundUser = registerUsers.find(
      user => user.email.toLowerCase() === newlogedinuser.email.toLowerCase(),
    );
    if (foundUser) {
      dispatch(authActions.setLoginUser(foundUser));
      Toast.show({
        type: 'success',
        text1: 'Login Successful!',
        text2: `Welcome, ${foundUser.email}`,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid Credential !',
        text2: `Please Check email and password `,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={IMAGES.BG_LOGIN_IMG}
        style={styles.background}
        resizeMode="cover">
        <LinearGradient
          colors={['#14181e', '#1c253254']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.linearGradient}>
          <Text style={styles.title}>SingIn</Text>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={userSchema}
            onSubmit={(values, {resetForm}) => {
              loginHandle(values, resetForm);
            }}>
            {({handleSubmit}) => (
              <View style={styles.form}>
                <TextInput
                  name="email"
                  placeholder="Enter the email"
                  keyboardType="email-address"
                  secureTextEntry
                />
                <TextInput
                  name="password"
                  placeholder="Enter the password"
                  secureTextEntry
                />
                <CustomButton
                  onPress={handleSubmit}
                  style={[styles.button, styles.buttontxt]}
                  title={'Login'}
                  useGradient={true}
                  gradientColor={COLORS.GRADIENT_PRIMARY}
                  start={{x: 0, y: 1}}
                  end={{x: 0, y: 0}}
                />
              </View>
            )}
          </Formik>
          <View style={styles.bottomsection}>
            <TouchableWithoutFeedback style={styles.forgot}>
              <Text style={styles.link}>Forgot the password ?</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              style={styles.navigatesignup}
              onPress={() => naviagation.navigate('SignUp')}>
              <Text style={styles.link}>
                Don;t have an account ?
                <Text style={styles.signup}>Sing Up</Text>
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'relative',
    width: '100%',
    // height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
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
    elevation: 5,
    shadowColor: '#282828',
  },
  buttontxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
  },
  bottomsection: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
  },
  forgot: {
    marginVertical: 20,
    alignItems: 'center',
  },
  link: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 16,
  },
  navigatesignup: {
    marginVertical: 50,
  },
  signup: {
    color: '#0000f8',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default Signin;

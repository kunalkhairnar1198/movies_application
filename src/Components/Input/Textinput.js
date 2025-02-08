import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { useField } from 'formik';
import COLORS from '../../constants/colors';

const Textinput = ({ name, placeholder, secureTextEntry, keyboardType, style, ...props }) => {
  const [field, meta, helpers] = useField(name); 
  //useField hook provide by the formik component api function that use automaitcally validate data with the form in custome input components 
// console.log(props)
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, meta.error && meta.touched ? styles.inputError : {}, style]}
        placeholder={placeholder}
        placeholderTextColor="#7B8794"
        value={field.value}
        onChangeText={helpers.setValue}
        onBlur={helpers.setTouched}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        {...props}
      />
      {meta.touched && meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 8,
    paddingHorizontals: 15,
    color: COLORS.TEXT_SECONDARY,
    padding:10,
    fontSize:20,
    borderWidth: 1,
    borderColor: '#2ce1e4',
    marginVertical:10
  },
  inputError: {
    borderColor: '#E53E3E',
  },
  errorText: {
    color: '#E53E3E',
    fontSize: 20,
    marginTop: 5,
  },
});

export default Textinput;

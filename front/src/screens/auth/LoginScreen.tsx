import React, { useState } from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import InputField from './../../components/InputField';

const LoginScreen = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeText = (name: string, text: string) => {
    setValues({
      ...values,
      [name]: text,
    })
  }

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: Text,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <InputField 
            placeholder='이메일' 
            error={'이메일을 입력하세요'}
            touched={touched.email}
            inputMode='email'
            value={values.email}
            onChangeText={(text) => handleChangeText('email', text)}
            onBlur={() => handleBlur('email')}
          />
          <InputField 
            placeholder='비밀번호' 
            error={'비밀번호를 입력하세요'}
            touched={touched.password}
            secureTextEntry
            value={values.password}
            onChangeText={(text) => handleChangeText('password', text)}
            onBlur={() => handleBlur('password')}
          />
        </View> 
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
  },
});

export default LoginScreen;
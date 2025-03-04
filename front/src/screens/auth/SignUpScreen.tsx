import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
// import { validateLogin } from '../../utils';

function validateSignup(values) {
  return values;
}

function SignUpScreen() {
  const signup = useForm({
    initialValue: { email: '', password: '', passwordConfirm: ''},
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.inputContainer}>
      <View style={styles.wrapper}>
        {/* <View style={styles.inputContainer}>
          <InputField
            placeholder='이메일'
            error={signup.errors.email}
            touched={signup.touched.email}
            inputMode='email'
            {...signup.getTextInputProps('email')}
          />
          <InputField
            placeholder='비밀번호'
            error={signup.errors.password}
            touched={signup.touched.password}
            secureTextEntry
            {...signup.getTextInputProps('password')}
          />
          <InputField
            placeholder='비밀번호 확인'
            error={signup.errors.password}
            touched={signup.touched.password}
            secureTextEntry
            {...signup.getTextInputProps('passwordConfirm')}
          />
        </View> */}
        <CustomButton
          label='회원가입'
          variant='filled'
          size='large'
          // onPress={handleSubmit}
        />
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
    marginBottom: 30,
  },
});

export default SignUpScreen;
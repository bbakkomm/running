import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import AuthHomeScreen from '../../screens/auth/AuthHomeScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import { authNavigations } from '../../constants';
import SignUpScreen from '../../screens/auth/SignUpScreen';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGNUP]: undefined;
}

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigtor() {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: 'white',
      },
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'gray',
      },
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen} 
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
      <Stack.Screen name={authNavigations.SIGNUP} component={SignUpScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({});

export default AuthStackNavigtor;
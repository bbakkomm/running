import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';
import AuthStackNavigtor from './src/navigation/AuthStackNavigtor';

function App() {
  const [name, setName] = useState('');

  const handleChangeInput = (text: string) => {
    setName(text);
    console.log(text);
  }

  return (
    <NavigationContainer>
      <AuthStackNavigtor />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 50,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;

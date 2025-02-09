import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>텍스트</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {

  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
  },
  
});

export default App;

import React from 'react';
import { Text, View, StatusBar, StyleSheet, Alert } from 'react-native';
import TAnimator from './TAnimator'



export default function App() {
  const _onFinish = () => {
    return Alert.alert('Animation', 'Callback!');
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <TAnimator
        content='For the things we have to learn before we can do them, we learn by doing them. REACT NATIVE 🎉'
        textStyle = {styles.testStyle}
        style = {styles.textContainer}
        duration = {500}
        onFinish = {_onFinish}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  textContainer: {},
  testStyle: {
    fontSize:28,
    fontWeight:'bold',
    marginBottom: 15,
    fontFamily:'Menlo'
  }
})

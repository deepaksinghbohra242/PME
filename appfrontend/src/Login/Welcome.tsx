import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '../Helper/Background';

const Welcome = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={{fontSize:40}}>Welcome</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    margin : 100
  },
});

export default Welcome;

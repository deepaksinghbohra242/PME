import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Background from '../Helper/Background';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>
        <Text style={{ fontSize: 40,fontWeight : 'bold' ,color: '#f6e336', margin: 10 }}>
          A Safe place for parents to know about their children
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, 
    marginTop:300
  },
  button: {
    backgroundColor: '#64f636',
    padding: 20,
    paddingHorizontal : 70,
    marginTop: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default Home;

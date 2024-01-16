import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (name: string | number, value: string | number) => {
    setUserDetails({...userDetails, [name]: value});
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/api/user/register', {
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
      });
      navigation.navigate('Dashboard');
    } catch (error: unknown) {
      Alert.alert(
        'Registration Failed',
        'Please check your details and try again.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.text}
        value={userDetails.name}
        onChangeText={text => handleInputChange('name', text)}
      />
      <TextInput
        placeholder="Enter your email"
        style={styles.text}
        value={userDetails.email}
        onChangeText={text => handleInputChange('email', text)}
      />
      <TextInput
        placeholder="Enter your password"
        secureTextEntry
        style={styles.text}
        value={userDetails.password}
        onChangeText={text => handleInputChange('password', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={{color: '#121414'}}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  title: {
    fontSize: 30,
    margin: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#121414',
  },
  text: {
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    color: 'black',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Register;

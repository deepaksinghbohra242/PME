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

const Login = () => {
  const navigation = useNavigation();
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name: string | number, value: string | number) => {
    setCredential({...credential, [name]: value});
  };

  const handleSubmit = async () => {
    try {
      const data = await axios.post('/api/user/login', {
        email: credential.email,
        password: credential.password,
      });
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Login Failed', 'Please check your details and try again.', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Sign In</Text>
      <TextInput
        value={credential.email}
        onChangeText={text => handleChange('email', text)}
        placeholder="Email"
        style={styles.text}
      />
      <TextInput
        value={credential.password}
        onChangeText={text => handleChange('password', text)}
        placeholder="Password"
        secureTextEntry
        style={styles.text}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 10, marginLeft: 10, color: 'black'}}>
        Register your account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
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
    fontSize: 40,
    margin: 50,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    margin: 5,
    color: '#121414',
    paddingLeft: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
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

export default Login;

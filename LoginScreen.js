import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    if (!phone || !password) {
      Alert.alert('Error', 'Please enter your phone number and password');
    } else {
      navigation.replace('Profile');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Women Safety App</Text>
      <Image
        style={styles.logo}
        source={{ uri: 'https://play-lh.googleusercontent.com/sgeJOxuq9bVpQLCPRlB_TZvvjj4Q_9TVnNUGmopWVq2d-jWKeZNF_NWBbap_F0aFdic' }}
      />
      <Text style={styles.loginPrompt}>Login to Your Account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone No"
          placeholderTextColor="#800080"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          autoCapitalize="none"
          color="#800080"
        />
        <Icon name="mobile" size={24} color="#800080" style={styles.iconInsideInput} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#800080"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          color="#800080"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={24} color="#800080"  />
        </TouchableOpacity>
        <Icon name="lock" size={24} color="#800080" style={styles.iconInsideInput} />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'pink',
    color: 'white',
    borderColor: 'pink',
    borderWidth: 1,
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  loginPrompt: {
    fontSize: 18,
    marginBottom: 10,
    color: '#800080'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  iconInsideInput: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    zIndex: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'pink',
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40, 
    borderRadius: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  }
});

export default LoginScreen;

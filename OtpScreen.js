import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { firebase } from '../firebaseConfig';

const OtpScreen = ({ route, navigation }) => {
  const { confirmation } = route.params;
  const [otp, setOtp] = useState('');

  const handleConfirmOtp = async () => {
    try {
      await confirmation.confirm(otp);
      navigation.replace('Profile');
    } catch (error) {
      console.error('Error confirming OTP:', error);
      Alert.alert('OTP Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        placeholderTextColor="#800080"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        autoCapitalize="none"
        color="#800080"
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleConfirmOtp}>
        <Text style={styles.buttonText}>Confirm OTP</Text>
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
    fontFamily: 'serif',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'pink',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    color: '#800080',
    marginBottom: 20,
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

export default OtpScreen;
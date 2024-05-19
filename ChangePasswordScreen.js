import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangePasswordScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChangePassword = () => {
    if (!phone || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all the fields');
    } else if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
    } else {
      // Handle password change logic here
      Alert.alert('Success', 'Password changed successfully');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Password</Text>
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
          placeholder="Enter New Password"
          placeholderTextColor="#800080"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          color="#800080"
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={24} color="#800080" />
        </TouchableOpacity>
        <Icon name="lock" size={24} color="#800080" style={styles.iconInsideInput} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          placeholderTextColor="#800080"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          color="#800080"
        />
        <Icon name="lock" size={24} color="#800080" style={styles.iconInsideInput} />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Update</Text>
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
  },
});

export default ChangePasswordScreen;

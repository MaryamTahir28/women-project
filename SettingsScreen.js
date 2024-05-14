import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button
        title="Edit Profile"
        onPress={() => alert('Edit Profile')}
      />
      <Button
        title="Manage Contacts"
        onPress={() => alert('Manage Emergency Contacts')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;

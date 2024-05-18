import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleBar}>
        <Text style={styles.titleText}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Change Password</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>Notifications</Text>
          <Switch 
            value={notificationsEnabled} 
            onValueChange={setNotificationsEnabled} 
            thumbColor={notificationsEnabled ? 'pink' : 'plum'}
            trackColor={{ false: 'plum', true: 'pink' }}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Dark Mode</Text>
          <Switch 
            value={darkMode} 
            onValueChange={setDarkMode} 
            thumbColor={darkMode ? 'pink' : 'plum'}
            trackColor={{ false: 'plum', true: 'pink' }}
          />
        </View>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Language</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Clear Cache</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Contact Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Report a Problem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>App Version</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>About the App</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  titleBar: {
    backgroundColor: 'pink',
    paddingVertical: 14,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#701C78',
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#800080',
  },
});


export default SettingsScreen;

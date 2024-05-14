import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationTrackerScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Location Tracker</Text>
      <Text>Your current location is: [Latitude, Longitude]</Text>
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

export default LocationTrackerScreen;

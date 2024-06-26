import React from 'react';
import {View, StyleSheet} from 'react-native';
import AccountScreen from '../screens/setting/AccountScreen';

const SettingsScreen = () => (
  <View style={styles.container}>
    <AccountScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;

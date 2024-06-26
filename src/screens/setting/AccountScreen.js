// SettingsScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';
import {useTheme} from '../../utils/ThemeContext';
import {lightStyles, darkStyles} from '../../utils/themes';

const AccountScreen = () => {
  const navigation = useNavigation();
  const [showConfirm, setShowConfirm] = useState(false);
  const {theme, toggleTheme} = useTheme();
  const styles = theme === 'dark' ? darkStyles : lightStyles;

  const handleLogout = () => {
    setShowConfirm(true);
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => setShowConfirm(false),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/Gowtham.jpeg')} // Update this to your image source
          style={styles.profileImage}
        />
        <TouchableOpacity>
          <Icons
            name="account-edit-outline"
            size={22}
            color="#E43A45"
            style={styles.editIcon}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Gowtham T</Text>
        <Text style={styles.username}>Mobile Application Developer</Text>
      </View>
      {/* <View style={styles.section}>
        <Text style={styles.text}>Account</Text>
        <TouchableOpacity style={styles.row}>
          <Icons name="account-outline" size={24} color="#4CAF50" />
          <Text style={styles.rowText}>Personal Details</Text>
          <Icon name="angle-right" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View> */}
      <View style={styles.section}>
        <Text style={styles.text}>Settings</Text>
        <View style={styles.row}>
          <Icons name="weather-night" size={24} color="#FFD700" />
          <Text style={styles.rowText}>Dark Mode</Text>
          <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
        </View>
        <TouchableOpacity style={styles.row}>
          <Icons name="shield-account-outline" size={24} color="#00BFFF" />
          <Text style={styles.rowText}>About</Text>
          <Icon name="angle-right" size={24} color="#4CAF50" />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.row}>
          <Icon name="globe" size={24} color="#32CD32" />
          <Text style={styles.rowText}>Language</Text>
          <Icon name="angle-right" size={24} color="#4CAF50" />
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.row}>
          <Icons name="bell-outline" size={25} color="#FFA500" />
          <Text style={styles.rowText}>Notification</Text>
          <Icon name="angle-right" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Icons name="help-circle-outline" size={24} color="#FF4500" />
          <Text style={styles.rowText}>Help & Support</Text>
          <Icon name="angle-right" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={handleLogout}>
          <Icons name="logout" size={24} color="#FF4500" />
          <Text style={styles.rowText}>Logout</Text>
          <Icon name="angle-right" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
      <Text style={styles.versionText}>Version 1.0.1</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1c1c1c',
    // padding: moderateScale(20),
  },
  header: {
    width: horizontalScale(37),
    backgroundColor: '#E43A45',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  profileImage: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    borderRadius: horizontalScale(50),
  },
  editIcon: {
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginTop: verticalScale(70),
    position: 'absolute',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginTop: verticalScale(10),
  },
  username: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  section: {
    // marginVertical: verticalScale(10),
    padding: 10,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(7),
    borderWidth: 0.5,
    borderBottomColor: 'gry',
    borderRadius: 10,
    // gap: 20,
  },
  text: {
    color: '#1c1c1c',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  rowText: {
    color: '#1c1c1c',
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(10),
    flex: 1,
  },
  deleteAccount: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  deleteAccountText: {
    color: 'red',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  versionText: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    fontSize: moderateScale(14),
    color: 'gray',
    textAlign: 'center',
  },
});

export default AccountScreen;

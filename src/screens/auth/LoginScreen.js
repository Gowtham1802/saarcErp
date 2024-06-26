import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics'; // Adjust the import path as needed

const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Main');
    }, 500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#E43A45" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.card}>
          <View style={styles.subContainer}>
            <Image
              source={require('../../assets/images/Logo.png')}
              style={styles.logo}
            />
            <Text style={styles.title}>SAARC CASES</Text>
          </View>
          <Text style={styles.subtitle}>ERP LOGIN</Text>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <FontAwesomeIcon
                name="user"
                size={horizontalScale(20)}
                color="#E43A45"
              />
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon
                name="lock-outline"
                size={horizontalScale(23)}
                color="#E43A45"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                keyboardType="numeric"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={horizontalScale(19)}
                  color="#E43A45"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.line}></Text>
          <Text style={styles.footer}>Powered by</Text>
          <View>
            <Image
              source={require('../../assets/images/net_logo.jpeg')}
              style={styles.poweredByLogo}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: horizontalScale(22),
  },
  card: {
    width: '90%',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: horizontalScale(18),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    marginBottom: verticalScale(16),
    gap: horizontalScale(8),
  },
  logo: {
    width: horizontalScale(56),
    height: verticalScale(56),
  },
  title: {
    fontSize: horizontalScale(26),
    fontFamily: 'Poppins-ExtraLight',
    fontWeight: 'bold',
    color: '#E43A45',
  },
  subtitle: {
    fontSize: horizontalScale(22),
    fontWeight: 'bold',
    fontFamily: 'Poppins-Thin',
    color: '#313131',
    marginBottom: verticalScale(32),
  },
  inputContainer: {
    width: '100%',
    gap: verticalScale(16),
    marginBottom: verticalScale(24),
  },
  input: {
    flex: 1,
    height: verticalScale(48),
    color: '#003366',
    fontSize: horizontalScale(14),
    paddingHorizontal: horizontalScale(8),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#A8A8A8',
    borderRadius: 5,
    paddingHorizontal: horizontalScale(12),
    gap: horizontalScale(8),
  },
  button: {
    width: '100%',
    height: verticalScale(44),
    backgroundColor: '#E43A45',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: verticalScale(72),
    top: verticalScale(16),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: horizontalScale(18),
  },
  line: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#A8A8A8',
    bottom: verticalScale(24),
  },
  footer: {
    width: horizontalScale(110),
    textAlign: 'center',
    fontSize: horizontalScale(14),
    color: '#A8A8A8',
    backgroundColor: '#fafafa',
    marginBottom: verticalScale(8),
    top: -verticalScale(40),
  },
  poweredByLogo: {
    width: horizontalScale(157),
    height: verticalScale(32),
    bottom: verticalScale(24),
  },
});

export default LoginScreen;

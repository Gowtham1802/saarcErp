// themes.js
import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from './Metrics';

const commonStyles = {
  container: {
    flex: 1,
    // padding: moderateScale(20),
  },
  header: {
    width: horizontalScale(375),
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  profileImage: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    borderRadius: horizontalScale(50),
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  editIcon: {
    left: 31,
    marginTop: -verticalScale(36),
    position: 'absolute',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(24),
    marginTop: verticalScale(10),
  },
  username: {
    fontSize: moderateScale(16),
  },
  section: {
    padding: 10,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(7),
    borderWidth: 0.6,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: moderateScale(20),
    marginBottom: verticalScale(10),
  },
  rowText: {
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(10),
    flex: 1,
  },
  deleteAccount: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  deleteAccountText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
  versionText: {
    marginTop: verticalScale(50),
    // marginBottom: verticalScale(10),
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
};

export const lightStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#ffffff',
  },
  header: {
    ...commonStyles.header,
    backgroundColor: '#E43A45',
  },
  name: {
    ...commonStyles.name,
    color: '#ffffff',
  },
  username: {
    ...commonStyles.username,
    color: '#ffffff',
  },
  row: {
    ...commonStyles.row,
    borderBottomColor: '#cccccc',
    borderColor: '#cccccc',
  },
  text: {
    ...commonStyles.text,
    color: '#1c1c1c',
  },
  rowText: {
    ...commonStyles.rowText,
    color: '#1c1c1c',
  },
  deleteAccountText: {
    ...commonStyles.deleteAccountText,
    color: 'red',
  },
  versionText: {
    ...commonStyles.versionText,
    color: 'gray',
  },
});

export const darkStyles = StyleSheet.create({
  ...commonStyles,
  container: {
    ...commonStyles.container,
    backgroundColor: '#1c1c1c',
  },
  header: {
    ...commonStyles.header,
    backgroundColor: '#333333',
  },
  name: {
    ...commonStyles.name,
    color: '#ffffff',
  },
  username: {
    ...commonStyles.username,
    color: '#aaaaaa',
  },
  row: {
    ...commonStyles.row,
    borderBottomColor: '#444444',
    borderColor: '#444444',
  },
  text: {
    ...commonStyles.text,
    color: '#ffffff',
  },
  rowText: {
    ...commonStyles.rowText,
    color: '#ffffff',
  },
  deleteAccountText: {
    ...commonStyles.deleteAccountText,
    color: 'red',
  },
  versionText: {
    ...commonStyles.versionText,
    color: 'gray',
  },
});

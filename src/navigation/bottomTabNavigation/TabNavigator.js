import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, View} from 'react-native';
import HomeScreen from '../../components/HomeScreen';
import TrackingScreen from '../../components/TrackingScreen';
import NotificationScreen from '../../components/NotificationScreen';
import SettingsScreen from '../../components/SettingsScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Tracking') {
    iconName = 'map-marker-outline';
  } else if (route.name === 'Notification') {
    iconName = 'bell-outline';
  } else if (route.name === 'Settings') {
    iconName = 'cog-outline';
  }

  return <Icons name={iconName} size={size} color={color} />;
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          getTabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: '#E43A45',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tracking"
        component={TrackingScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerStyle: {backgroundColor: '#E43A45'},
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="angle-left"
                size={35}
                color="#fff"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

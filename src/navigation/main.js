import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';

import AlbumTitle from '../components/AlbumTitle';
import Comps from '../components';
import MainHeader from '../components/MainHeader';
import HeaderBack from '../components/HeaderBack';

import Albums from '../modules/albums';
import Photos from '../modules/photos';
import Invite from '../modules/invite';
import Settings from '../modules/settings';

import colors from '../shared/styles/colors';

const mainNav = createBottomTabNavigator({
  Albums: {
    screen: createStackNavigator({
      Albums: {
        screen: Albums,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <MainHeader />,
          headerRight: () => <Comps.AddPhotoHeader />,
          headerTitle: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          },
        },
      },
      Photos: {
        screen: Photos,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <HeaderBack screen="Albums" />,
          headerRight: () => null,
          headerTitle: () => <AlbumTitle />,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          },
        },
      },
    }),
    navigationOptions: {
      title: 'Albums',
      activeTintColor: colors.secondary,
      tabBarIcon: ({ tintColor }) => (
        <Icon name="appstore-o" size={22} color={tintColor} />
      ),
    },
  },
  Invite: {
    screen: createStackNavigator({
      Invite: {
        screen: Invite,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <MainHeader />,
          // headerRight: () => <Comps.AddPhotoHeader />,
          headerTitle: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          },
        },
      },
    }),
    navigationOptions: {
      title: 'Invite',
      activeTintColor: colors.secondary,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="user-plus" size={24} color={tintColor} />
      ),
    },
  },
  Settings: {
    screen: createStackNavigator({
      Settings: {
        screen: Settings,
        navigationOptions: {
          headerShown: true,
          headerLeft: () => <MainHeader />,
          // headerRight: () => <Comps.AddPhotoHeader />,
          headerTitle: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          },
        },
      },
    }),
    navigationOptions: {
      title: 'Settings',
      activeTintColor: colors.secondary,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="settings" size={22} color={tintColor} />
      ),
    },
  },
},{
    tabBarOptions: {
      showIcon: true,
      activeTintColor: colors.secondary,
      style: {
        paddingVertical: 4,
        backgroundColor: colors.white,
        // display: 'none'
      },
    },
});

export default mainNav;

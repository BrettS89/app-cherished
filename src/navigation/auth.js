import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import colors from '../shared/styles/colors';

import HeaderBack from '../components/HeaderBack';

import Landing from '../modules/auth/landing';
import Loading from '../modules/auth/loading';
import Login from '../modules/auth/login';
import Signup from '../modules/auth/signup';

const authNav = createBottomTabNavigator({
  Loading: {
    screen: Loading,
  },
  Landing: {
    screen: Landing,
  },
  Login: {
    screen: createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Landing'} />,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '800', color: colors.main }}>Login</Text></View>,
          headerRight: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Login',
      activeTintColor: colors.main,
    }
  },
  Signup: {
    screen: createStackNavigator({
      Signup: {
        screen: Signup,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen={'Landing'} />,
          headerTitle: () => <View><Text style={{ fontSize: 22, fontWeight: '800', color: colors.main }}>Sign up</Text></View>,
          headerRight: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Signup',
      activeTintColor: colors.main,
    }
  },
},
{
  tabBarOptions: {
    // activeTintColor: colors.main,
    style: {
      display: 'none'
    }
  },
});

export default authNav;

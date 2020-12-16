import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../shared/styles/colors';

import CreateAlbumButtom from '../components/CreateAlbumButton';
import HeaderBack from '../components/HeaderBack';
import PhotoStudio from '../modules/upload_studio/photo_studio';
import SelectFamily from '../modules/upload_studio/select_family';
import SelectAlbum from '../modules/upload_studio/select_album';

const noBottomNav = createBottomTabNavigator({
  SelectFamily: {
    screen: createStackNavigator({
      SelectFamily: {
        screen: SelectFamily,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen="Albums" />,
          headerTitle: () => <View><Text style={{ fontSize: 20, fontWeight: '800', color: colors.main }}>Select a family</Text></View>,
          headerRight: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          }
        },
      },
      SelectAlbum: {
        screen: SelectAlbum,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen="SelectFamily" />,
          headerTitle: () => null,
          headerRight: () => <CreateAlbumButtom />,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          }
        },
      },
      PhotoStudio: {
        screen: PhotoStudio,
        navigationOptions: {
          headerLeft: () => <HeaderBack screen="SelectAlbum" />,
          headerTitle: () => <View><Text style={{ fontSize: 20, fontWeight: '800', color: colors.main }}>Photo Studio</Text></View>,
          headerRight: () => null,
          headerStyle: {
            // shadowOffset: { height: 0, width: 0 },
            backgroundColor: colors.white,
          }
        },
      },
    }),
    navigationOptions: {
      title: 'Photo Studio',
      activeTintColor: colors.main,
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: colors.main,
    style: {
      display: 'none'
    }
  },
});

export default noBottomNav;

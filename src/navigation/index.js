import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

import authNav from './auth';
import mainNav from './main';
import noBottomTabNav from './noBottomTab';

const rootNavigator = createSwitchNavigator({
  AuthNav: authNav,
  NoBottomNav: noBottomTabNav,
  Main: mainNav,
}, {
  initialRouteName: 'AuthNav',
});

export default createAppContainer(rootNavigator);

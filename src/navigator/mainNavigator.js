import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile1255Navigator from '../features/UserProfile1255/navigator';
import UserProfile1254Navigator from '../features/UserProfile1254/navigator';
import UserProfile1253Navigator from '../features/UserProfile1253/navigator';
import UserProfile1252Navigator from '../features/UserProfile1252/navigator';
import UserProfile1251Navigator from '../features/UserProfile1251/navigator';
import UserProfile1248Navigator from '../features/UserProfile1248/navigator';
import UserProfile1247Navigator from '../features/UserProfile1247/navigator';
import UserProfile1246Navigator from '../features/UserProfile1246/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile1255: { screen: UserProfile1255Navigator },
UserProfile1254: { screen: UserProfile1254Navigator },
UserProfile1253: { screen: UserProfile1253Navigator },
UserProfile1252: { screen: UserProfile1252Navigator },
UserProfile1251: { screen: UserProfile1251Navigator },
UserProfile1248: { screen: UserProfile1248Navigator },
UserProfile1247: { screen: UserProfile1247Navigator },
UserProfile1246: { screen: UserProfile1246Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

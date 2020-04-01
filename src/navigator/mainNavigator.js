import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile1249Navigator from '../features/UserProfile1249/navigator';
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
UserProfile1249: { screen: UserProfile1249Navigator },
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

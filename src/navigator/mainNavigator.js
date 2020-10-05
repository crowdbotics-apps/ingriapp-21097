import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings127049Navigator from '../features/Settings127049/navigator';
import UserProfile127047Navigator from '../features/UserProfile127047/navigator';
import BlankScreen0127025Navigator from '../features/BlankScreen0127025/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings127049: { screen: Settings127049Navigator },
UserProfile127047: { screen: UserProfile127047Navigator },
BlankScreen0127025: { screen: BlankScreen0127025Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

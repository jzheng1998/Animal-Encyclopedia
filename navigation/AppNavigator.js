import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import MoreImageScreen from '../screens/MoreImageScreen';
import AccountScreen from '../screens/AccountScreen';

const config = {
  initialRouteName: 'Home'
};

const ScreenStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '',
    },
    Main: {
      screen: MainScreen,
      path: '',
    },
    Detail: {
      screen: DetailScreen,
      path: '',
    },
    Login: {
      screen: LoginScreen,
      path: '',
    },
    Signup: {
      screen: SignupScreen,
      path: '',
    },
    MoreImage: {
      screen: MoreImageScreen,
      path: '',
    },
    Account: {
      screen: AccountScreen,
      path: '',
    }
  },
  config
);

const AppNavigator = createAppContainer(ScreenStack);

export default AppNavigator;
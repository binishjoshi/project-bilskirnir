import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';

const screens = {
  Home: {
    screen: Home
  }
};

const HomeStack = createStackNavigator(screens, {
  headerMode: 'none',
});

export default createAppContainer(HomeStack);
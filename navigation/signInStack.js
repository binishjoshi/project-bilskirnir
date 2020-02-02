import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SignIn from '../screens/signin';

const screens = {
  SignIn: {
    screen: SignIn,
  }
};

const SignInStack = createStackNavigator(screens, {
  headerMode: "none"
});

export default createAppContainer(SignInStack);
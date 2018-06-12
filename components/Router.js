import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Option from './Option';
import Bookmark from './Bookmark';
import Random from './Random'
import Game from './Game';
import Start from './Start';


export const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Option: {
    screen: Option
  },
  Bookmark: {
    screen: Bookmark
  },
  Random: {
    screen: Random
  },
  Game: {
    screen: Game
  },
  Start: {
    screen: Start
  }
})

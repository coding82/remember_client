import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Option from './Option';
import MyList from './MyList';
import Random from './Random'
import Game from './Game';
import Start from './Start';


export const RootStack = createStackNavigator({
  Home: {
    screen: Profile
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Profile: {
    screen: Profile
  },
  Option: {
    screen: Option
  },
  MyList: {
    screen: MyList
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

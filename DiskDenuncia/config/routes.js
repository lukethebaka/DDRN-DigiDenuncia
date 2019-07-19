import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Home from '../pages/map';
import Login from '../pages/login';
import History from '../pages/history';
import Statistics from '../pages/data';

export default createAppContainer(createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      // tabBarIcon: {},
      // tabBarLabel: 'Mapa',
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      // tabBarIcon: {},
      // tabBarLabel: 'Mapa',
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      // tabBarIcon: {},
      // tabBarLabel: 'Mapa',
    }
  },
  Statistics: {
    screen: Statistics,
    navigationOptions: {
      // tabBarIcon: {},
      // tabBarLabel: 'Mapa',
    }
  },
},
{
  initialRouteName: "Home",
  barStyle: { /* backgroundColor: '#', */},
  inactiveColor: 'gray',
  backBehavior: 'order',
  color: '#ffffff',
}));

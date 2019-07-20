import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../pages/map';
import About from '../pages/about';
import History from '../pages/history';
import Statistics from '../pages/data';
import Login from '../pages/login';

const AboutStack = createStackNavigator(
{
  About: {
    screen: About,
    navigationOptions: {
      header: null,
      headerVisible: false,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: {
        marginTop: Platform.OS === 'ios' ? 0 : -(StatusBar.currentHeight),
      },
    }
  } 
},
{
  mode: 'modal',
});

export default createAppContainer(createMaterialBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'home'}/>  
        </View>
      ),
      tabBarLabel: 'Mapa',
    }
  },
  About: {
    screen: AboutStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (  
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'info'}/>  
        </View>
      ),
      tabBarLabel: 'Sobre',
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (  
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'history'}/>  
        </View>
      ),
      tabBarLabel: 'Histórico',
    }
  },
  Statistics: {
    screen: Statistics,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (  
        <View>
          <Icon style={[{color: tintColor}]} size={25} name={'insert-chart'}/>  
        </View>
      ),
      tabBarLabel: 'Estatísticas',
    }
  },
},
{
  initialRouteName: "Home",
  barStyle: { backgroundColor: '#009c37' },
  activeColor: '#fee000',
  inactiveColor: '#fff',
  backBehavior: 'order',
  color: '#ffffff',
}));

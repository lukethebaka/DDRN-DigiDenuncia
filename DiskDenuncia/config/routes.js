import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../pages/map';
// import Data from '../pages/data';
// import History from '../pages/history';
// import Login from '../pages/login';

export default createStackNavigator(
{
    Home: {
        screen: Home,
        navigationOptions: {
        header: () => null,
        },
    },
    // Data: {
    //     screen: Data,
    //     navigationOptions: {
    //     headerTitle: 'Estatísticas',
    //     },
    // },
    // History: {
    //     screen: History,
    //     navigationOptions: {
    //     headerTitle: 'Histórico',
    //     },
    // },
    // Login: {
    //     screen: Login,
    //     navigationOptions: {
    //     headerTitle: 'Log-in policial',
    //     },
    // },
    },
    {
    headerMode: 'screen',
    },
{
    mode: 'modal',
    cardStyle: {
    paddingTop: StatusBar.currentHeight,
    },
    headerMode: 'none',
},
);
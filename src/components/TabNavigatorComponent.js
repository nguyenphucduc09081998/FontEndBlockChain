/* eslint-disable prettier/prettier */
// import { createBottomTabNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeComponent from './HomeComponent';
import RegisterComponent from './RegisterComponent';
import HistoryComponent from './HistoryComponent';
import HistoryDetailComponent from './HistoryDetailComponent';

let routeConfigs = {
  // eslint-disable-next-line prettier/prettier
  'Home': {
    screen: HomeComponent,
  },
  'Register': {
    screen: RegisterComponent,
  },
  '': {
    screen: HistoryComponent,
  },
  'HistoryDetail': {
    screen: HistoryDetailComponent,
  },
};

let tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10
    },
  },
  order: ['Home', 'Register', '', 'HistoryDetail'],
};

export const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
/* eslint-disable prettier/prettier */
// import { createBottomTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeComponent from './HomeComponent';
import RegisterComponent from './RegisterComponent';
import HistoryComponent from './HistoryComponent';
import HistoryDetailComponent from './HistoryDetailComponent';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeComponent} />
      <Tab.Screen name="Register" component={RegisterComponent} />
    </Tab.Navigator>
  );
}

export default Tab;





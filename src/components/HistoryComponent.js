/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class HistoryComponent extends Component {
  static navigationOptions = ({navigation}) => {
    // eslint-disable-next-line prettier/prettier
    const { params = {} } = navigation.state;
    let tabBarLabel = 'Home';
    let tabBarIcon = () => (
      <Image
        source={require('./../images/history.png')}
        style={{width: 26, height: 26, tintColor: '#964f8e'}}
      />
    );
    return {tabBarLabel, tabBarIcon};
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#964f8e',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
          This is History Screen
        </Text>
      </View>
    );
  }
}

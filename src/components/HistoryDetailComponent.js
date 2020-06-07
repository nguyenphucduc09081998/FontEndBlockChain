/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export default class MyWalletComponent extends Component {
  // eslint-disable-next-line prettier/prettier
  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state;
    let tabBarLabel = 'Home';
    let tabBarIcon = () => (
      <Image
        source={require('./../images/myWallet.png')}
        style={{width: 26, height: 26, tintColor: '#007256'}}
      />
    );
    return {tabBarLabel, tabBarIcon};
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#007256',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: 'white'}}>
          This is My Wallet Screen
        </Text>
      </View>
    );
  }
}

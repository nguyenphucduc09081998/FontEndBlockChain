

import React, { Component } from 'react'
import {StyleSheet,Text, View} from 'react-native'
import Register from './src/components/Register'
// import TabNavigatorComponent from './src/components/TabNavigatorComponent'
// import HomeComponent from './src/components/HomeComponent';
// import PromotionComponent from './src/components/PromotionComponent';
// import TransactionHistoryComponent from './src/components/TransactionHistoryComponent';
// import MyWalletComponent from './src/components/MyWalletComponent';
export default class App extends Component {
    render() {
      return(
        <View style={styles.container}>
          <Register/>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60,
  },
});
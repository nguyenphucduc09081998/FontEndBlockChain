/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  Header, LearnMoreLinks, Colors, DebugInstructions,ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, { Component } from 'react';
import {
  SafeAreaView, Image, StyleSheet, ScrollView, View,Text, ImageBackground, StatusBar, 
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';
const {width: WIDTH} = Dimensions.get('window');
import imageground from './images/backgroundblockchain.jpg';
import logologin from './images/blockchain.jpg';
import Icon from 'react-native-vector-icons/Ionicons'
const logo = { uri: "https://reactjs.org/logo-og.png" };

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }
  clickCreatePkFk(){
    console.log("clickCreatePkFk");
    fetch("http://192.168.1.2/serverlogin.php",{
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
      })
      .then((res) =>res.json()
      )
      .then(response=>{
        console.log("response",response);
      })
      .catch(err=>{
        console.log("fail create pk fk")
      })
  };
  
  showPass = () => {
    if(this.state.press == false){
      this.setState({showPass: false, press: true})
    }else{
      this.setState({showPass: true, press: false})
    }
  }

  render () {
    return (
      <ImageBackground source={imageground} style={styles.imagegroundContainer}>
    
        <View style={styles.logoContainer}>
          <Image source={logologin} style={styles.logo} />
          <Text style={styles.titlelogin}>Block fsfChain</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={28}
                color={'rgba(255,255,255,0.7)'}
                style={styles.inputIcon}
            />  
          <TextInput
            style={styles.input}
            placeholder={'Hint Word'}
            //secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
          />

          {/* <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
            <Icon name={ this.state.press == false ? 'ios-eye' : 'ios-eye-off'}  
                size={26} color={'rgba(255,255,255,0.7)'}
            />
          </TouchableOpacity > */}
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.clickCreatePkFk.bind(this)}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }
};







const styles = StyleSheet.create({
  imagegroundContainer: {
    flex:1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems:'center',
  },

  logo: {
    width:120,
    height:120,
  },

  logoContainer: {
    alignItems:'center',
    marginBottom:50
  },
  
  titlelogin: {
    color: 'white',
    fontSize:20,
    fontFamily:'500',
    marginTop: 10,
    opacity:0.5,
  },

  input: {
    width: WIDTH - 55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25,
  },

  inputContainer: {
    marginTop:10
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left:37,
  },

  btneye: {
    position: 'absolute',
    top: 8,
    right:37,
  },

  btnLogin: {
    width: WIDTH/4,
    height:45,
    borderRadius:25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20
  },

  text: {
    color:  'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  }
});




























/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      private_key: "",
      public_key: "",
      message: ""
    }
  }

  register(){

  }


  render() {
    return (
      <View style={styles.Register}>
        <Text style={styles.header}>Register</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Private Key"
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Public Key"
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Message"
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={this.register.bind(this)}
        >
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Register: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#59cbbd',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

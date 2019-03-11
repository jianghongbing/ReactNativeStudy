/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

type Props = {}

class LoginItem extends Component {
  render() {
    return (
      <View style={styles.loginItem}>
        <Text
          style={styles.loginItemText}
          >
          {this.props.title}
        </Text>
        <TextInput
          style={[styles.loginItemText, {marginStart: 5, flex: 1}]}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          clearButtonMode='while-editing'
          />
      </View>
    );
  }
}


class LoginView extends Component {
  render(){
    return (
      <View style={styles.loginView}>
        <View style={styles.loginInputView}>
          <LoginItem
            title='账号:'
            placeholder='请输入账号'
            />
          <View style={{backgroundColor: '#999', height: 0.75}}></View>
          <LoginItem
            title='密码:'
            placeholder='请输入密码'
            secureTextEntry={true}
            />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <KeyboardAvoidingView
          keyboardVerticalOffset={10}
          style={styles.keyboardAvoidingView}
          behavior='position'
          enabled={true}
          contentContainerStyle={{backgroundColor: 'orange'}}
          >
          <LoginView />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 10,
    backgroundColor: '#3344FF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  keyboardAvoidingView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  loginItem: {
    flexDirection: 'row',
    margin: 10,
  },
  loginItemText: {
    fontSize: 16,
  },
  loginInputView: {
    borderRadius: 4,
    borderWidth: 0.75,
    borderColor: '#999',
    marginHorizontal: 10,
  },
  loginView:{
    marginBottom: 30,
  }
});

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
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {}

class LoginBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      accout: '',
      password: '',
    };
  }
  render(){
    return (
      <View>
        <View style={styles.loginBox}>
          <View style={styles.inputItem}>
            <Text style={styles.itemText}>账号:</Text>
            <TextInput
              style={styles.input}
              placeholder='请输入用户名'
              value={this.state.accout}
              clearButtonMode='while-editing'
              onChangeText={(text)=>{
                this.setState({accout: text});
              }}
            />
          </View>
          <View style={[styles.inputItem, {borderBottomWidth: 0}]}>
            <Text style={styles.itemText}>密码:</Text>
            <TextInput
              style={styles.input}
              placeholder='请输入密码'
              value={this.state.password}
              clearButtonMode='while-editing'
              onChangeText={(text)=>{
                this.setState({password: text});
              }}
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.75}
          onPress={()=>{
            console.log(`userName:${this.state.accout}, password:${this.state.password}`);
          }}
        >
          <Text style={{color: 'white', textAlign: 'center', 'fontSize': 18}}>登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}



const imageSource = './src/imgs/image_01@2x.png';
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('./src/imgs/background.png')}
        >
        <LoginBox />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  imageBackground: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  loginBox: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  inputItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    marginLeft: 8,
    marginRight: 0,
    fontSize: 16,
  },
  submitButton: {
    padding: 10,
    margin: 10,
    backgroundColor: '#38ADFF',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
  },
});

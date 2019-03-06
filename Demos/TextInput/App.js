/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

type Props = {};
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



export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          clearButtonMode='unless-editing'
          defaultValue='xiaoming'
          multiline={true}
          numberOfLines={3}
          placeholder='请输入用户名'
          placeholderTextColor={'red'}
          selectionColor={'green'}
          selectTextOnFocus={true}
          onContentSizeChange={(event)=>{
            console.log(event.nativeEvent);
          }}
          onScroll={(event)=>{
            console.log(event.nativeEvent);
          }}
        >
        </TextInput>
        <TextInput
          style={styles.textInput}
          enablesReturnKeyAutomatically={true}
          maxLength={10}
          onFocus={()=>{
            console.log('获取焦点');
          }}
          onBlur={()=>{
            console.log('失去了焦点');
          }}
          onChange={(event)=>{
            console.log('on change');
            console.log(event.nativeEvent);
          }}
          onChangeText={(text)=>{
            console.log('on change text');
            console.log(text);
          }}
          onKeyPress={(event)=>{
            console.log(event.nativeEvent);
          }}
          onEndEditing={()=>{
            console.log('end editing');
          }}
          onSubmitEditing={()=>{
            console.log('submit editing');
          }}
        >
        </TextInput>
        <LoginBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    margin: 10,
    padding: 10,
    backgroundColor: 'orange',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  loginBox: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    // padding: 10,
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

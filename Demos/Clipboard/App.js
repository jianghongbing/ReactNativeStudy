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
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Clipboard,
} from 'react-native'

type Props = {}

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {text:''}
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <TextInput
              style={styles.textInput}
              value={this.state.text}
              placeholder='请输入剪贴板设置的内容'
              placeholderTextColor='green'
              onChangeText={text=>this.setState({text: text})}
          />
          <TouchableOpacity
              style={styles.button}
              onPress={this._getStringFromClipboard.bind(this)}
          >
            <Text style={styles.text}>Get Clipboard String</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={this._setStringToClipboard.bind(this)}
          >
            <Text style={styles.text}>Set Clipboard String</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
  }

  _setStringToClipboard() {
    const text = this.state.text.trim();
    if (text.length === 0) {
      Alert.alert('请输入合法的字符串');
      return
    }
    Clipboard.setString(this.state.text)
  }

  _getStringFromClipboard() {
    Clipboard.getString().then(string=>
        Alert.alert(`获取的剪贴板内容:${string}`)
    ).catch(error =>
        Alert.alert(`获取剪贴板内容失败:${error.message}`)
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1.0,
    marginHorizontal: 10,
    borderColor: 'green',
    padding: 5,
  },
  button: {
    backgroundColor: 'orange',
    margin:10,
    padding: 10,
    borderRadius: 5.0,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
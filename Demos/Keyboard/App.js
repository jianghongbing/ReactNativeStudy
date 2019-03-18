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
  SafeAreaView,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={}
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={this.state.text}
            onChangeText={text=>this.setState({text: text})}
            onSubmitEditing={event=>{
              event.preventDefault()
              Alert.alert('on submint editing')
            }}
            />
          <TouchableOpacity style={styles.button} onPress={_=>Keyboard.dismiss()}>
            <Text style={styles.text}>Dismiss Keyboard</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this._keyboardWillShow)
    Keyboard.addListener('keyboardDidShow', this._keyboardDidShow)
    Keyboard.addListener('keyboardWillHide', this._keyboardWillHide)
    Keyboard.addListener('keyboardDidHide', this._keyboardDidHide)
    Keyboard.addListener('keyboardWillChangeFrame', this._keyboardWillChangeFrame)
    Keyboard.addListener('keyboardDidChangeFrame', this._keyboardDidChangeFrame)
  }

  componentWillUnmount() {
    // Keyboard.removeListener('keyboardWillShow', this._keyboardWillShow)
    this.keyboardWillShowListener.remover()
    Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow)
    Keyboard.removeListener('keyboardWillHide', this._keyboardWillHide)
    Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide)
    Keyboard.removeListener('keyboardWillChangeFrame', this._keyboardWillChangeFrame)
    Keyboard.removeListener('keyboardDidChangeFrame', this._keyboardDidChangeFrame)
  }

  _keyboardWillShow(event){
    console.log('keyboard will show');
    console.log(event);
  }

  _keyboardDidShow(){
    console.log('keyboard did show');
  }

  _keyboardWillHide(){
    console.log('keyboard will hide');
  }

  _keyboardDidHide(){
    console.log('keyboard did hide');
  }

  _keyboardWillChangeFrame(event){
    console.log('keyboard will change frame');
    console.log(event);
  }
  _keyboardDidChangeFrame(event){
    console.log('keyboard did change frame');
    console.log(event);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2233ee',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },

  textInputContainer: {
    padding: 10,
  },

  textInput: {
    padding: 8,
    borderWidth: 1.0,
    borderColor: '#999999',
    borderRadius: 5.0,
  }
});

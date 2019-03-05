/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableNativeFeedback, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
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
  button: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

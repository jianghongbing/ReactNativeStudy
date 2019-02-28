/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.firstView}></View>
        <View style={[styles.viewSize, {backgroundColor: 'orange'}]}></View>
        <View style={[styles.viewSize, styles.thirdView]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  viewSize: {
    width:200,
    height: 80,
  },

  firstView: {
    marginTop: 100,
    backgroundColor: 'red',
    width: 200,
    height: 80,
  },

  thirdView: {
    margin: 10,
    borderWidth: 5,
    borderStartColor: 'red',
    borderEndColor: 'blue',
    borderRadius: 5,
  }

});

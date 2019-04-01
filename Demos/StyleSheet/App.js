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
  SafeAreaView,
  View,
} from 'react-native'

type Props = {}

export default class App extends Component<Props> {

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.hairline}/>
          <View style={styles.flatten}/>
          <View style={styles.super}>
            <View style={styles.sub}/>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  hairline: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  },
  flatten: StyleSheet.flatten([
      {backgroundColor: 'orange'},
      {width: 100, height: 50},
      {backgroundColor: 'blue', borderRadius: 10},
      {marginTop: 20},
      ]),
  super: {
    backgroundColor: 'orange',
    width: 200,
    height: 100,
    marginTop: 20,
  },
  sub: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000',
  },
});
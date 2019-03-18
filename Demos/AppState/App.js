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
  TouchableOpacity,
  Text,
  AppState,
  Alert,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={_=>Alert.alert(`app state: ${AppState.currentState}`)}>
          <Text style={styles.text}>Get AppState</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

  componentDidMount() {
    AppState.addEventListener('change', this._appStateChange)
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._appStateChange)
  }

  _appStateChange(event){
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
});

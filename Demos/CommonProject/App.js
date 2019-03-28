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
  Alert,
  NetInfo,
} from 'react-native'

type Props = {}

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this._connectionChange = this._connectionChange.bind(this);
    this.state = {}
  }

  componentWillMount(){
    NetInfo.addEventListener('connectionChange', this._connectionChange);
  }

  componentWillUnmount(){
    NetInfo.removeEventListener('connectionChange', this._connectionChange)
  }


  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={[styles.text, {color: '#45e', fontSize: 25, opacity: 0.8}]}>Change Network Connection</Text>
          <Text style={[styles.text, {color: 'black'}]}>{`Connected:${this.state.isConnected}`}</Text>
          <Text style={[styles.text, {color: 'black'}]}>{`NetworkType: ${this.state.type}`}</Text>
          <Text style={[styles.text, {color: 'black'}]}>{`EffectiveConnectionType:${this.state.effectiveType}`}</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={this._showNetworkInfo}
          >
            <Text style={styles.text}>Get network info</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
  }

  _showNetworkInfo(){
    NetInfo.getConnectionInfo().then(({type, effectiveType})=>{
      Alert.alert(`network type:${type}, effectiveType:${effectiveType}`)
    }).catch(error => Alert.alert(`Get Network info error: ${error.message}`));

    NetInfo.isConnected.fetch()
        .then(isConnected=>this.setState({isConnected}))
        .catch(({message})=>{Alert.alert(`Error:${message}`)});
  }
  _connectionChange({type, effectiveType}){
    this.setState({type, effectiveType})
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
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
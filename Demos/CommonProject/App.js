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
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor:'#2233ee', margin:10, padding: 10, borderRadius:5}}
          onPress={()=>{
            const os = Platform.OS
            const version = Platform.Version
            const debugMode = Platform.isTesting
            const isTV = Platform.isTV
            const info = `os:${os}, version:${version},debugMode: ${debugMode},isTV:${isTV}${os==='ios' ? (`,isIPAD:${Platform.isPad}`) : ''}`
            Alert.alert('Platform Info', info)
          }}
          >
          <Text
            style={{color: 'white', fontSize: 20, textAlign:'center'}}
            >{Platform.OS==='ios' ? '获取iOS设备信息' : '获取andriod设备信息'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

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
import CityList from './CustomComponents/CityList'

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
        <SafeAreaView style={styles.container}>
          <CityList style={styles.cityList}/>
          <CityList
              style={styles.cityList}
              textStyle={{color: 'red'}}
              cityNames={['武汉', '杭州']}
              borderType='dash'
          />
          <CityList
              style={styles.cityList}
              textStyle={{color: 'green'}}
              cityNames={['厦门', '成都']}
              borderType='solid'
          />
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  cityList: {
    margin: 10,
  }
});
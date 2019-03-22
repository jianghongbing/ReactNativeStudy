import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

export default class PageThree extends Component {
  static navigationOptions = _=>({
    title: 'P',
    tabBarIcon:_=>(<Icon name="ios-cloud-download" size={24} color='white' />)
  })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page Three</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#abc',
  },
  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
})

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class DestinationPage extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`number:${navigation.getParam('number', 10000)}`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
})

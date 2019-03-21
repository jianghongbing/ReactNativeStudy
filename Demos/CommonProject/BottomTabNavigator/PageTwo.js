import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class PageTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Page Two</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
  },
})

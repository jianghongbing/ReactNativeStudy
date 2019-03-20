import React, {Component} from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import ActionButton from './ActionButton'


export default class NavigationActionsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActionButton
          style={styles.button}
          title='Navigate'
          onPress={_=>{}}
          />
        <ActionButton
          style={styles.button}
          title='Back'
          />
        <ActionButton
          style={styles.button}
          title='Set Params'
          />
        <ActionButton
          style={styles.button}
          title='Init'
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
})

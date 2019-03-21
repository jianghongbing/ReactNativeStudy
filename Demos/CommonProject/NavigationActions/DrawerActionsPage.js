import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import ActionButton from './ActionButton'

export default class DrawerActionsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Todo</Text>
        <ActionButton
          style={styles.button}
          title='closeDrawer'
          />
        <ActionButton
          style={styles.button}
          title='openDrawer'
          />
        <ActionButton
          style={styles.button}
          title='toggleDrawer'
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
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
})

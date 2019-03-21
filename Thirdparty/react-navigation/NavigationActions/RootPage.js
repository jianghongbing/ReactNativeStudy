import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import ActionButton from './ActionButton'

class RootPage extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <ActionButton
          style={styles.button}
          title='NavigationActions'
          onPress={_=>navigation.navigate({
            routeName: 'Actions',
            key: 'Navigation Actions',
          })}
          />
        <ActionButton
          style={styles.button}
          title='StackActions'
          onPress={_=>navigation.push('StackActions')}
          />
        <ActionButton
          style={styles.button}
          title='DrawerActions'
          onPress={_=>navigation.push('DrawerActions')}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    margin: 10,
  },
})


export default RootPage

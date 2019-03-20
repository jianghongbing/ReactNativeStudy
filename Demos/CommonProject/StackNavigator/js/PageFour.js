import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

import {NavigatorButton} from './PageOne'

export default class PageThree extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <NavigatorButton
          title='Dismiss返回到上一个堆栈'
          onPress={_=>navigation.dismiss()}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
  },
})

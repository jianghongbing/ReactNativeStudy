import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'

import ActionButton from './ActionButton'
import {NavigationActions} from 'react-navigation'

export default class NavigationActionsPage extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`Set Params button Press Count:${navigation.getParam('count', 0)}`}</Text>
        <ActionButton
          style={styles.button}
          title='Navigate'
          onPress={_=>{
            const action = NavigationActions.navigate({
              routeName: 'DestinationPage',
              params: {number: Math.round(Math.random() * 100)}
            })
            navigation.dispatch(action)
          }}
          />
        <ActionButton
          style={styles.button}
          title='Back'
          onPress={_=>{
            const action = NavigationActions.back({
              // key: 'RootPage',
            })
            navigation.dispatch(action)
          }}
          />
        <ActionButton
          style={styles.button}
          title='Set Params'
          onPress={_=>{
            const count = navigation.getParam('count', 0) + 1
            const action = NavigationActions.setParams({
              params:{
                count: count
              },
              key: 'Navigation Actions',
            })
            navigation.dispatch(action)
          }}
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
  text: {
    color: '#123',
    fontSize: 30,
    textAlign: 'center',
  },
})

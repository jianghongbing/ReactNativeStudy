import React, {Component} from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import ActionButton from './ActionButton'
import {StackActions, NavigationActions} from 'react-navigation'

export default class StackActionPage extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <ActionButton
          style={styles.button}
          title='Push'
          onPress={_=>{
            const action = StackActions.push({
              routeName:'DestinationPage',
              params:{number: 100},
            })
            navigation.dispatch(action)
          }}
          />
        <ActionButton
          style={styles.button}
          title='Pop'
          onPress={_=>{
            const action = StackActions.pop()
            navigation.dispatch(action)
          }}
          />
        <ActionButton
          style={styles.button}
          title='popToTop'
          onPress={_=>{
            const action = StackActions.popToTop()
            navigation.dispatch(action)
          }}
          />
        <ActionButton
          style={styles.button}
          title='Replace'
          onPress={_=>{
            const action = StackActions.replace({
              routeName: 'DestinationPage',
              params:{number: 200},
            })
            navigation.dispatch(action)
          }}
          />
        <ActionButton
          style={styles.button}
          title='Reset'
          onPress={_=>{
            const action = StackActions.reset({
              index: 1,
              actions:[
                NavigationActions.navigate({
                  routeName: 'StackActions'
                }),
                NavigationActions.navigate({
                  routeName: 'DestinationPage',
                })
              ]
            })
            navigation.dispatch(action)
          }}
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

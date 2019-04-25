/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'


type Props = {}

export default class App extends Component<Props> {
  render() {
    // const {store} = this.props
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.counter}>{this.props.count}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
                style={styles.button}
            >
              <Text style={styles.buttonTitle}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
            >
              <Text style={styles.buttonTitle}>-</Text>
            </TouchableOpacity>
          </View>
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

  counter: {
    fontSize: 80,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonGroup: {
    margin: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    flex: 1,
  },
  buttonTitle: {
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  },
});

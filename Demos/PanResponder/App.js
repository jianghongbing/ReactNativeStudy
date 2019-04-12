/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  PanResponder,
  Text,
} from 'react-native'

type Props = {}

export default class App extends Component<Props> {
  constructor() {
    super()
    this.state={dx: 0, dy: 0, color:'red'}
    this.dx = 0
    this.dy = 0
  }
  componentWillMount(): void {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._onStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._onMoveShouldSetPanResponder.bind(this).bind(this),
      onStartShouldSetPanResponderCapture: this._onStartShouldPanResponderCapture.bind(this),
      onMoveShouldSetPanResponderCapture: this._onMoveShouldSetPanResponderCapture.bind(this),
      onPanResponderGrant: this._onPanResponderGrant.bind(this),
      onPanResponderMove: this._onPanResponderMove.bind(this),
      onPanResponderReject: this._onPanResponderReject.bind(this),
      onPanResponderTerminationRequest: this._onPanResponderTerminationRequest.bind(this),
      onPanResponderTerminate: this._onPanResponderTerminate.bind(this),
      onPanResponderStart: this._onPanResponderStart.bind(this),
      onPanResponderEnd: this._onPanResponderEnd.bind(this),
      onPanResponderRelease: this._onPanResponderRelease.bind(this),
    })
  }

  _onStartShouldSetPanResponder() {
    return true
  }

  _onMoveShouldSetPanResponder() {
    return true
  }

  _onStartShouldPanResponderCapture() {
    return false
  }

  _onMoveShouldSetPanResponderCapture() {
    return false
  }

  _onPanResponderGrant() {
    this.setState({color: 'orange'})
  }

  _onPanResponderMove(event, gestureState) {
    let {dx, dy} = gestureState
    this.setState({dx: this.dx + dx, dy: this.dy + dy})
  }


  _onPanResponderReject() {
    console.log('onPanResponderReject')
  }

  _onPanResponderTerminationRequest() {
    console.log('onPanResponderTerminationRequest')
  }

  _onPanResponderTerminate() {
    this.setState({dx: 0, dy: 0})
  }

  _onPanResponderStart() {
    console.log('onPanResponderStart')
  }
  _onPanResponderEnd() {
    console.log('onPanResponderEnd')
  }
  _onPanResponderRelease() {
    // this.setState({color: 'red', dx: 0, dy: 0})
    this.setState({color: 'red'})
    this.dx = this.state.dx
    this.dy = this.state.dy
  }


  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View
              style={[styles.redView,
                {backgroundColor: this.state.color,
                  transform:[{translateX:this.state.dx}, {translateY: this.state.dy}]}
                  ]}
              {...this._panResponder.panHandlers}
          >
            <Text style={styles.text}>Move Me</Text>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  redView: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
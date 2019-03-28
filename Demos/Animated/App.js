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
  Text,
  Animated,
  TouchableOpacity,
  SafeAreaView,
  Easing,
} from 'react-native'

type Props = {}

const AnimationButton = ({title, onPress})=>{
  return (
      <TouchableOpacity
          style={styles.button}
          onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  )
};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(1.0),
    }
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Animated.View style={[styles.animatedView,{opacity: this.state.opacity}]} />
          <AnimationButton title='Start Animation 1' onPress={this._executeFadeAnimation.bind(this)}/>
        </SafeAreaView>
    )
  }

  _executeFadeAnimation() {
    const fadeAnimation = Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
    });
    fadeAnimation.start(_=>this.state.opacity.setValue(1));
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  animatedView: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#5566aa',
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});
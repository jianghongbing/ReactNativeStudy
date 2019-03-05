/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      opacity: 0.5,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{
            console.log('on press');
          }}
          activeOpacity={this.state.opacity}
          ref='button'
        >
          <Text style={styles.text}>Press ME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {opacity: 0.5}]}
          onPress={()=>{
            const opacity = this.state.opacity === 0.5 ? 1.0 : 0.5;
            this.setState({opacity: opacity});
            this.refs.button.setOpacityTo(opacity, 1);
          }}
        >
          <Text style={styles.text}>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
});

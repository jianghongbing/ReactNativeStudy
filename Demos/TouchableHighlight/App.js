/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={count: 0, isDisabled:false};
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={(event)=>{
            console.log('点击了button');
            console.log(event, this);
          }}
          style={styles.button}
          activeOpacity={0.9}
          underlayColor='red'
          onHideUnderlay={this._onHideUnderlay}
          onShowUnderlay={this._onShowUnderlay}
          onLongPress={()=>{
            console.log('long press');
          }}
        >
          <Text
            style={styles.text}
          >
            Press Me
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
  _onHideUnderlay(){
    console.log('hide underlay');
  }
  _onShowUnderlay(){
    console.log('show underlay');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'orange',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

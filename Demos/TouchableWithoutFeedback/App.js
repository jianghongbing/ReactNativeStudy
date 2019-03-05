/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback, Text} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={isDisabled:false};
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={()=>{
            console.log('on press');
          }}
          onPressIn={()=>{
            console.log('on press in');
          }}
          onPressOut={()=>{
            console.log('on press out');
          }}
          onLongPress={()=>{
            console.log('on long press');
          }}
          delayPressIn={1000}
          delayPressOut={1000}
          delayLongPress={1000}
          onLayout={(event)=>{
            console.log('on layout');
            console.log(event);
          }}
          onBlur={()=>{
            console.log('on blur');
          }}
          onFocus={()=>{
            console.log('on focus');
          }}
        >
          <View
            style={[styles.viewCommon, styles.firstView]}
          >
            <Text style={styles.text}>
            Press Me
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          disabled={this.state.isDisabled}
          onPress={()=>{
            console.log('disabled');
            const disabled = !this.state.isDisabled;
            this.setState({isDisabled: disabled});
          }}
        >
          <View style={[styles.viewCommon, styles.secondView]}>
            <Text style={styles.text}>
              Press To disable
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={[styles.viewCommon, styles.thirdView]}>
          <TouchableWithoutFeedback
            hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
            onPress={(event)=>{
              console.log(event);
            }}
            pressRetentionOffset={{top: 20, left: 20, bottom: 20, right: 20}}
          >
            <View style={[styles.viewCommon, styles.fourthView]}>
              <Text style={styles.text}>Press me</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
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
  viewCommon: {
    padding: 20,
    margin: 10,
    borderRadius: 8,
  },
  firstView: {
    backgroundColor: 'orange',
  },
  text: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondView: {
    backgroundColor: 'red',
  },
  thirdView: {
    backgroundColor: 'orange',
  },
  fourthView: {
    backgroundColor: 'red',
    alignSelf: 'center',
  }
});

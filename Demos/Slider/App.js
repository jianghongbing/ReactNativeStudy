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
  View,
  Slider,
  Text,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      slidingCompleteValue: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          step={5}
          value={this.state.value}
          minimumTrackTintColor='red'
          maximumTrackTintColor='green'
          thumbImage={require('./src/imgs/image_01.png')}
          onValueChange={(value)=>{
            this.setState({value: value});
          }}
          onSlidingComplete={(value)=>{
            this.setState({slidingCompleteValue: value});
          }}
          />
        <Text style={styles.text}>{this.state.value}</Text>
        <Text style={styles.text}>{this.state.slidingCompleteValue}</Text>
        <Slider
          thumbImage={require('./src/imgs/image_02.png')}
          trackImage={require('./src/imgs/image_03.png')}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  }
});

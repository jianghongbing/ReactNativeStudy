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
  Switch,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      firstSwitchValue: false,
      secondSwitchValue: false,
      thirdSwitchValue: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Switch
            value={this.state.firstSwitchValue}
            trackColor={{false: 'red', true: 'black'}}
            thumbColor='blue'
            onValueChange={()=>{
              const value = !this.state.firstSwitchValue;
              this.setState({firstSwitchValue: value});
            }}
          />
          <Switch
            value={this.state.secondSwitchValue}
            trackColor={{false: 'red', true: 'black'}}
            thumbColor='blue'
            ios_backgroundColor='orange'
            onValueChange={()=>{
              const value = !this.state.secondSwitchValue;
              this.setState({secondSwitchValue: value});
            }}
          />
          <Switch
           value={this.state.thirdSwitchValue}
            ios_backgroundColor='orange'
            onValueChange={()=>{
              const value = !this.state.thirdSwitchValue;
              this.setState({thirdSwitchValue: value});
            }}
          />
          <Switch
            trackColor={{false: 'red', true: 'black'}}
            thumbColor='green'
            value={true}
            disabled={true}
          />
        </View>
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
});

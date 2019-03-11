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
  SegmentedControlIOS,
  Alert,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={selectedIndex: 0}
  }
  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          style={styles.segmentedControl}
          values={['Apple', 'Google', 'Facebook', 'Amazon']}
          selectedIndex={this.state.selectedIndex}
          momentary={true}
          onValueChange={(value)=>{
            Alert.alert(value)
          }}
          />
        <SegmentedControlIOS
          style={styles.segmentedControl}
          values={['Apple', 'Google', 'Facebook', 'Amazon']}
          tintColor='orange'
          selectedIndex={this.state.selectedIndex}
          onChange={()=>{
            Alert.alert('on Change')
          }}
          />
        <SegmentedControlIOS
          style={styles.segmentedControl}
          values={['Apple', 'Google', 'Facebook', 'Amazon']}
          enabled={false}
          selectedIndex={this.state.selectedIndex}
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
  segmentedControl: {
    margin: 10,
  },
});

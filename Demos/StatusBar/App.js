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
  StatusBar,
  TouchableHighlight,
  Text,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      hidden: false,
      barStyle: 'dark-content',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          hidden={this.state.hidden}
          barStyle={this.state.barStyle}
          networkActivityIndicatorVisible={true}
          showHideTransition='slide'
          />
        <TouchableHighlight
          style={styles.button}
          onPress={()=>{
            this.setState({hidden: !this.state.hidden})
          }}
          >
          <Text style={styles.text}>Hide or Show StatusBar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>{
            let barStyle = this.state.barStyle
            if (barStyle === 'dark-content') {
              barStyle = 'light-content'
            }else {
              barStyle = 'dark-content'
            }
            this.setState({barStyle: barStyle})
          }}
          >
          <Text style={styles.text}>Change BarStyle</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={()=>{
            StatusBar.setBarStyle('light-content', true)
          }}
          >
          <Text style={styles.text}>
            setBarStyle
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    backgroundColor: 'orange',
  },
  button: {
    margin: 10,
    backgroundColor: '#3344FF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

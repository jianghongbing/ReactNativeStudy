/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={count: 0, isDisabled:false};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'green', fontSize:30}}>{`Press count: ${this.state.count}`}
        </Text>
        <View style={styles.buttonView}>
          <Button
            style={styles.button}
            title='Press Me'
            color='red'
            onPress={this._firstButtonOnPress}
            >
          </Button>
        </View>
        <View
          style={
            {backgroundColor: 'black', padding: 10, margin: 20, borderRadius: 10,}
          }
        >
          <Button
            title='Press To Disabled'
            color='green'
            onPress={()=>{
              let isDisabled = this.state.isDisabled;
              this.setState({isDisabled: !isDisabled});
            }}
            disabled={this.state.isDisabled}
            >
          </Button>
        </View>
      </View>
    );
  }

  _firstButtonOnPress = ()=>{
    let count = this.state.count;
    count++;
    this.setState({count: count});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: 'orange',
    padding: 10,
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'orange',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

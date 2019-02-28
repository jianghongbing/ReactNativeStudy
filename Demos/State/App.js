/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

type Props = {};

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>{`${this.props.title}:${this.state.count}`}</Text>
        <Text styles={styles.subTitle}>{`${this.props.subTitle}:${this.state.count}`}</Text>
        <Button style={styles.button} onPress={this.buttonPressed.bind(this)} title='点击改变文字'></Button>
      </View>
    );
  }

  buttonPressed() {
    let count = this.state.count;
    count++;
    this.setState({count: count});
  }
}


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StateComponent title='标题一' subTitle='子标题一'/>
        <StateComponent title='标题二' subTitle='子标题二'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  component: {
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 20,
    color: 'red',
  },
  subTitle: {
    fontSize: 14,
    color: 'blue',
  },
  button: {
    fontSize: 18,
    color: 'black',
  },
});

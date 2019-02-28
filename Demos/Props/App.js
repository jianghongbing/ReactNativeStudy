/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

class PropsText extends Component {
  render() {
    return (
      <View sytle={styles.propsText}>
        <Text style={styles.propsTextTitle}>{this.props.title}</Text>
        <Text style={styles.propsTextSubTitle}>{this.props.subTitle}</Text>
      </View>
    );
  }
}


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <PropsText title='标题1' subTitle='这是标题1下面的内容'></PropsText>
        <PropsText title='标题2' subTitle='这是标题2下面的内容'></PropsText>
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
  propsText: {
    backgroundColor: 'orange',
  },

  propsTextTitle: {
    fontSize: 20,
    color: 'red',
  },
  propsTextSubTitle: {
    fontSize: 14,
    color: 'blue',
  }
});

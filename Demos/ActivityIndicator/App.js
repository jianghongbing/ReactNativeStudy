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
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isAnimating: true,
      buttonTitle: '停止动画'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ActivityIndicator
            animating={this.state.isAnimating}
            color='red'
            size='large'
            hidesWhenStopped={false}
          />
          <ActivityIndicator
            animating={this.state.isAnimating}
            color='green'
            size='small'
            hidesWhenStopped={true}
          />
          <ActivityIndicator
            animating={this.state.isAnimating}
            color='gray'
            size='small'
            hidesWhenStopped={true}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{
            const isAnimating = !this.state.isAnimating;
            const title = this.state.buttonTitle === '停止动画' ? '开始动画' : '停止动画';
            this.setState({
              isAnimating: isAnimating,
              buttonTitle:title
            });
          }}
        >
          <Text style={styles.text}>{this.state.buttonTitle}</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});

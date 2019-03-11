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
  ProgressViewIOS,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {progress: 0.5}
  }
  componentDidMount() {
    this.timerId = setInterval(()=>{
      let progress = this.state.progress + 0.1;
      if (progress > 1.0) {
        progress = 0
      }
      this.setState({progress: progress})
    }, 100)
  }

  componentWillMount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS
          style={styles.progressView}
          progress={this.state.progress}
          progressTintColor='red'
          trackTintColor='green'
         />
       <ProgressViewIOS
         style={styles.progressView}
         progress={this.state.progress}
         progressImage={require('./src/imgs/image_01.png')}
         trackImage={require('./src/imgs/image_02.png')}
         progressViewStyle='bar'
         />
       <ProgressViewIOS
         style={styles.progressView}
         progress={this.state.progress}
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
  progressView:{
    margin: 10,
  },
});

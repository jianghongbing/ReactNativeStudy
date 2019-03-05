/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.redView, styles.viewCommon]} onStartShouldSetResponder={this._onStartShouldSetResponder}
          onResponderMove={this._onResponderMove}
          nativeID='redView'
          onLayout={this._onLayout}
          onResponderRelease={this._onResponderRelease}
        >
        <View
          style={{backgroundColor:'black', alignSelf: 'center', width: 50, height: 50}}
        >
        </View>
        </View>
        <View
          style={[styles.greenView, styles.viewCommon]}
          onMoveShouldSetResponder={this._onMoveShouldSetResponder}
          onResponderMove={this._onResponderMove}
          onResponderGrant={this._onResponderGrant}
          onResponderReject={this._onResponderReject}
          onResponderTerminate={this._onResponderTerminate}
          onResponderTerminationRequest={this._onResponderTerminateRequest}
        >
          <View
            style={{position: 'relative', width:100, height: 100, backgroundColor:'red', top: 180, left: 20}}
          >
          </View>
        </View>
        <View
          style={[styles.blueView, styles.viewCommon]}
          onStartShouldSetResponder={this._onStartShouldSetResponder}
          onResponderGrant={this._blueViewTouchStart}
          onResponderMove={this._moveOnBlueView}
          onStartShouldSetResponderCapture={this._onStartShouldSetResponderCapture}
          onMoveShouldSetResponderCapture={this._onMoveShouldSetResponderCapture}
          >
          <View
            style={{backgroundColor:'orange', width: 100, height: 100}}
            onStartShouldSetResponder={this._onStartShouldSetResponder}
            onResponderGrant={this._orangeViewTouchStart}
            onResponderMove={this._moveOnOrangeView}
          >
          </View>
        </View>
      </View>
    );
  }
  _onStartShouldSetResponder(event) {
    console.log(event);
    return true;
  }
  _onResponderMove(){
    console.log('move on view');
  }
  _onLayout(event) {
    console.log('布局完成了');
    console.log(event);
    // console.log(event, event.x, event.y, event.width, event.height);
  }
  _onMoveShouldSetResponder(event){
    // console.log(event, 'onMoveShouldSetResponder');
    // return false;
    return true;
  }
  _onResponderGrant() {
    console.log('onResponderGrant');
  }

  _onResponderRelease(){
    console.log('onResponderRelease');
  }
  _onResponderReject(){
    console.log('onResponderReject');
  }

  _onResponderTerminate(){
    console.log('onResponderTerminate');
  }

  _onResponderTerminateRequest(){
    console.log('onResponderTerminationRequest');
    return true;
  }

  _blueViewTouchStart(){
    console.log('touch start on blueView');
  }
  _orangeViewTouchStart(){
    console.log('touch start on orangeView');
  }
  _moveOnBlueView(){
    console.log('move on blueView');
  }
  _moveOnOrangeView(){
    console.log('move on orangeView');
  }

  _onStartShouldSetResponderCapture(){
    console.log('onStartShouldSetResponderCapture');
    return true;
  }
  _onMoveShouldSetResponderCapture(){
    console.log('onStartShouldSetResponderCapture');
    return true;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },

  viewCommon: {
    borderWidth: 3,
    marginTop: 20,
    borderColor: 'orange',
  },

  redView: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },

  greenView: {
    flex: 2,
    backgroundColor: 'green',
    overflow: 'hidden',
  },

  blueView: {
    flex: 3,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

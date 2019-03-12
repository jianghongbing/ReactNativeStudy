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
  Alert,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <ScrollView
          style={[styles.scrollView, styles.scrollViewOne]}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyleOne}
          bounces={true}
          minimumZoomScale={0.5}
          maximumZoomScale={4.0}
          zoomScale={2.0}
          pinchGestureEnabled={true}
          onContentSizeChange={(contentWidth, contentHeight)=>{
            console.log(`contentWidth: ${contentWidth}, contentHeight:${contentHeight}`);
          }}
          onMomentumScrollBegin={()=>{
            console.log('onMomentumScrollBegin')
          }}
          onMomentumScrollEnd={()=>{
            console.log('onMomentumScrollEnd')
          }}
          onScroll={(event)=>{
            console.log(event.nativeEvent);
          }}
          scrollEventThrottle={5}
          onScrollBeginDrag={()=>{
            console.log('onScrollBeginDrag')
          }}
          onScrollEndDrag={()=>{
            console.log('onScrollEndDrag')
          }}
          >
          <Image source={require('./src/imgs/landscape.jpeg')}/>
        </ScrollView>
        <ScrollView
          style={[styles.scrollView, styles.scrollViewOne]}
          alwaysBounceVertical={false}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          >
          <View style={[styles.subView, {backgroundColor: 'red'}]}>
            <Text style={styles.text}>Page One</Text>
          </View>
          <View style={[styles.subView, {backgroundColor: 'green'}]}>
            <Text style={styles.text}>Page Two</Text>
          </View>
          <View style={[styles.subView, {backgroundColor: 'blue'}]}>
            <Text style={styles.text}>Page Three</Text>
          </View>
        </ScrollView>
        <ScrollView
          style={styles.scrollView}
          >
        </ScrollView>
      </View>
    )
  }
}

const {
  width: screenWidth,
  height: screenHeight
} = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  scrollView: {
    backgroundColor: 'orange',
    marginTop: 10,
    flex: 1,
  },

  scrollViewOne: {
    marginTop: 0,
  },
  contentContainerStyleOne: {
    padding: 20,
    backgroundColor: 'black',
  },
  subView: {
    width: screenWidth,
    height: 100,
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },

});

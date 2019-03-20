import {createStackNavigator, createAppContainer} from 'react-navigation'
import PageOne, {PageOneHeader} from './PageOne'
import PageTwo, {PageTwoHeaderLeft, PageTwoHeaderRight} from './PageTwo'
import PageThree from './PageThree'
import PageFour from './PageFour'
import React from 'react'

export const AStackNavigator = createStackNavigator({
  RootPage:{
    screen: PageFour,
    navigationOptions: {
      title: 'PageFour',
    },
  }
})

const StackNavigator = createStackNavigator({
  RootPage: {
    screen: PageOne,
    navigationOptions:({navigation})=>({
      title: 'PageOne',
      headerTitle: 'RootPage',
      header:(<PageOneHeader title='Home'/>),
      headerBackTitle: '返回',
      headerBackImage: require('../../src/imgs/image_01.png'),
      headerBackTitleStyle:{color: 'orange', fontSize: 20},
    }),
  },
  PageTwo: {
    screen: PageTwo,
    navigationOptions:({navigation})=>({
      title: 'PageTwo',
      // headerTitleStyle:{color: 'red', fontSize: 30},
      headerTintColor: 'orange',
      headerTransparent: true,
      // headerLeft: (<PageTwoHeaderLeft />),
      headerLeftContainerStyle: {marginStart: 10},
      headerRight: (<PageTwoHeaderRight />),
      headerRightContainerStyle: {marginEnd: 10},
      // gesturesEnabled: false,
      // gestureDirection: 'inverted'
    }),
  },
  PageThree: {
    screen: PageThree,
    navigationOptions: {
      title: 'PageThree',
    },
  },
  PageFour: {
    screen: AStackNavigator,
  },
},{
  initialRouteName: 'RootPage',
  // mode: 'modal',
  // headerMode: 'screen',
  // headerBackTitleVisible: false,
  // headerLayoutPreset: 'left',
  cardShadowEnabled: false,
  cardShadowEnabled: true,
})







export const AppContainer = createAppContainer(StackNavigator)

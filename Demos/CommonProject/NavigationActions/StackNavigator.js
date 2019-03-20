import React, { Component } from 'react'
import { createStackNavigator, createAppContainer} from 'react-navigation'
import RootPage from './RootPage'
import NavigationActionsPage from './NavigationActionsPage'
// import StackActionsPage from './StackActionsPage'



const StackNavigator = createStackNavigator({
  RootPage: {
    screen: RootPage,
    navigationOptions: {
      title: 'Actions'
    },
    key: 'RootPage',
  },
  Actions:{
    screen: NavigationActionsPage,
    navigationOptions: {
      title: 'Navigation Actions'
    }
  },
}, {
  initialRouteName: 'RootPage'
})

export const AppContainer = createAppContainer(StackNavigator)

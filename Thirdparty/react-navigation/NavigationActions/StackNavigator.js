import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import RootPage from './RootPage'
import NavigationActionsPage from './NavigationActionsPage'
import DestinationPage from './DestinationPage'
import StackActionPage from './StackActionPage'
import DrawerActionsPage from './DrawerActionsPage'

const StackNavigator = createStackNavigator({
  RootPage: {
    screen: RootPage,
    navigationOptions: {
      title: 'Actions'
    },
  },
  Actions:{
    screen: NavigationActionsPage,
    navigationOptions: {
      title: 'Navigation Actions'
    },
  },
  StackActions: {
    screen: StackActionPage,
    navigationOptions: {
      title: 'Stack Actions'
    }
  },
  DestinationPage: {
    screen: DestinationPage,
    navigationOptions: {
      title: 'DestinationPage',
    }
  },
  DrawerActions: {
    screen: DrawerActionsPage,
    navigationOptions: {
      title: 'Drawer Actions'
    }
  }
}, {
  initialRouteName: 'RootPage',
  initialRouteKey: 'RootPage',
})

export const AppContainer = createAppContainer(StackNavigator)

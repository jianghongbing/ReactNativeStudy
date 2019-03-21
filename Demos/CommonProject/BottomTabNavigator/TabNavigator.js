import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import PageOne from './PageOne'
import PageTwo from './PageTwo'


const BottomTabNavigator = createBottomTabNavigator({
  PageOne: {
    screen: PageOne,
  },
  PageTwo: {
    screen: PageTwo,
  },
}, {
  initialRouteName: 'PageOne',
  tabBarOptions: {
    activeBackgroundColor: '#456',
    inactiveBackgroundColor: 'red',
    inactiveTintColor: 'white',
    activeTintColor: '#fe2',
    style:{
      backgroundColor: 'blue',
    },
    labelStyle: {
      fontSize: 16,
    },
  }
})

export default AppContainer = createAppContainer(BottomTabNavigator)

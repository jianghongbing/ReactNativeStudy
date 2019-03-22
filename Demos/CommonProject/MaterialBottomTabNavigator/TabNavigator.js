import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

const MaterialBottomTabNavigator = createMaterialBottomTabNavigator({
  PageOne: {
    screen: PageOne,
  },
  PageTwo: {
    screen: PageTwo,
  },
  PageThree: {
    screen: PageThree,
  }
}, {
  initialRouteName: 'PageOne',
  shifting: true,
  labeled: true,
  activeBackgroundColor: '#456',
  inactiveBackgroundColor: 'red',
  inactiveTintColor: 'white',
  activeTintColor: '#fe2',
  order:['PageThree', 'PageTwo', 'PageOne'],
  style:{
    backgroundColor: 'blue',
  },
  labelStyle: {
    fontSize: 16,
  },
})

export default AppContainer = createAppContainer(MaterialBottomTabNavigator)

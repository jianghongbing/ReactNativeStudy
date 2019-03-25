import {createAppContainer, createDrawerNavigator} from 'react-navigation'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import { Dimensions } from 'react-native'

const DrawerWidth = Dimensions.get('screen').width * 0.5;

const DrawerNavigator = createDrawerNavigator({
  PageOne: PageOne,
  PageTwo: PageTwo,
  PageThree: PageThree,
},{
  initialRouteName: 'PageOne',
  drawerWidth: DrawerWidth,
  drawerPosition: 'right',
  drawerType: 'back',
  drawerBackgroundColor: '#36f',
  contentOptions: {
    items:[PageThree, PageTwo, PageOne],
    activeItemKey: 'selectedItem',
    activeTintColor: 'white',
    inactiveTintColor: 'orange',
    activeBackgroundColor: 'red',
    inactiveBackgroundColor: '#666',
  },

});

export default AppContainer = createAppContainer(DrawerNavigator)

import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'

const SwitchNavigator = createSwitchNavigator({
  PageOne: PageOne,
  PageTwo: PageTwo,
  PageThree: PageThree,
},{
  initialRouteName: 'PageOne',

});

export default AppContainer = createAppContainer(SwitchNavigator)

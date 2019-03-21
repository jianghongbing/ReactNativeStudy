import React, {Component} from 'react'
import {NavigatorButton} from './PageOne'
import { StackActions, NavigationActions } from 'react-navigation'

export default class PageThree extends Component {
  render() {
    const {navigation} = this.props
    const count = navigation.getParam('count', 0)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`Count:${count}`}</Text>
        <NavigatorButton
          title='Push'
          onPress={_=>navigation.push('PageThree', {count: count+1})}
          />
        <NavigatorButton
          title='Pop'
          onPress={_=>navigation.pop()}
          />
        <NavigatorButton
          title='PopToRoot'
          onPress={_=>navigation.popToTop()}
          />
        <NavigatorButton
          title='GoBack'
          onPress={_=>navigation.goBack()}
          />
        <NavigatorButton
          title='Replace'
          onPress={_=>navigation.replace('PageTwo')}
          />
        <NavigatorButton
          title='修改参数'
          onPress={_=>navigation.setParams({count: count + 100})}
          />
        <NavigatorButton
          title='Dispatch'
          onPress={_=>{
            const action = NavigationActions.navigate({
              routeName: 'PageTwo',
            })
            navigation.dispatch(action)
          }}
          />
        <NavigatorButton
          title='Reset'
          onPress={_=>{
            const action = StackActions.reset({
              index: 1,
              actions: [
                NavigationActions.navigate({ routeName: 'RootPage' }),
                NavigationActions.navigate({ routeName: 'RootPage' }),
              ],
            })
            navigation.dispatch(action)
          }}
          />
        <NavigatorButton
          title='Log Route Info'
          onPress={_=>console.log(navigation.state, navigation.isFocused())}
          />
      </View>
    )
  }

  componentWillMount() {
    const {navigation} = this.props
    this.willFocusListener = navigation.addListener('willFocus', this._willFocus)
    this.didFocusListener = navigation.addListener('didFocus', this._didFocus)
    this.willBlurListener = navigation.addListener('willBlur', this._willBlur)
    this.didBlurListener = navigation.addListener('didBlur', this._didBlur)
  }
  componentWillUnmount() {
    this.willFocusListener.remove()
    this.didFocusListener.remove()
    this.willBlurListener.remove()
    this.didBlurListener.remove()
  }
  _willFocus(){
    Alert.alert('will focus')
  }
  _didFocus(){
    Alert.alert('did focus')
  }
  _willBlur(){
    Alert.alert('will blur')
  }
  _didBlur(){
    Alert.alert('did blur')
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
  },
})

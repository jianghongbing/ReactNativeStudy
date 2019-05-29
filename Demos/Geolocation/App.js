/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import {
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native'


type Props = {}

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {latitude: 0, longitude: 0}
  }

  componentDidMount() {
    const geolocation = navigator.geolocation
    geolocation.setRNConfiguration({skipPermissionRequests: true})
    this.watchId = geolocation.watchPosition(this._getLocationSuccess.bind(this), this._getLocationError)
  }
  componentWillUnmount(): void {
    navigator.geolocation.clearWatch(this.watchId)
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>{`latitude:${this.state.latitude}, longitude:${this.state.longitude}`}</Text>
          <TouchableOpacity
              style={styles.button}
              onPress={_=>navigator.geolocation.requestAuthorization()}
          >
            <Text style={styles.buttonTitle}>Request Authorization</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={_=>{
                // const success = position=>{
                //   this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
                // }
                // const failed = error=>{
                //   Alert.alert('获取位置信息出错了', `message:${error.message}, code:${error.code}`)
                // }

                const options = {timeout: 3000, maximumAge: 5000, enableHighAccuracy: true}
                navigator.geolocation.getCurrentPosition(this._getLocationSuccess.bind(this), this._getLocationError, options)}
              }
          >
            <Text style={styles.buttonTitle}>Get Current Location</Text>
          </TouchableOpacity>
        </SafeAreaView>
    )
  }
  _getLocationSuccess(position) {
    this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude})
  }

  _getLocationError(error){
    Alert.alert('获取位置信息出错了', `message:${error.message}, code:${error.code}`)
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 5,
    margin: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
  },

  buttonTitle: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
});

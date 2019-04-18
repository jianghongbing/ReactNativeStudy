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
    SafeAreaView,
    View,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native'

type Props = {}

export default class App extends Component<Props> {
  constructor() {
    super()
    this.state = {
      textOne: ''
    }
    this.firstRef = React.createRef()
    this.secondRef = null
  }
  _onFocus() {
    if (this.firstRef.current.isFocused()) {
      this.secondRef.focus()
    } else  {
      this.firstRef.current.focus()
    }
  }

  _onClear(){
    // console.log(this.firstRef, this.secondRef)
    this.firstRef.current.clear()
    this.secondRef.clear()
    this.setState({textOne: ''})
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={{marginTop: 50}}>
            <TextInput
                style={styles.textInput}
                placeholder='这是不带应用的textInput'
                placeholderTextColor='green'
                defaultValue='没有引用的textInput'
                value={this.state.textOne}
                onChangeText={(text)=>this.setState({textOne: text})}
            />
            <TextInput
                style={styles.textInput}
                placeholderTextColor='green'
                placeholder='这是一个带有引用的textInput'
                defaultValue=''
                ref={this.firstRef}
            />
            <TextInput
                style={styles.textInput}
                placeholderTextColor='green'
                placeholder='这是第二个带有引用的textInput'
                defaultValue=''
                ref={(textInput)=>this.secondRef=textInput}
            />
            <View
                style={styles.buttonGroup}
            >
              <TouchableOpacity
                  style={styles.button}
                  onPress={this._onClear.bind(this)}
              >
                <Text style={styles.text}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.button}
                  onPress={this._onFocus.bind(this)}
              >
                <Text style={styles.text}>Focus</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flex: 1,
  },
  textInput: {
    margin: 10,
    padding: 6,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#999',
    borderRadius: 5,
  },
  buttonGroup: {
    margin: 10,
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#34456e',
    borderRadius: 5,
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
});
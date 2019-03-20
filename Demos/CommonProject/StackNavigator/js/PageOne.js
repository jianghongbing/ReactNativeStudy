import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export const NavigatorButton = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export const PageOneHeader = ({title})=>{
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

class PageOne extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={[styles.text, {color: 'orange', fontSize: 30, fontWeight: '500'}]}>Root Page</Text>
        <NavigatorButton
          title='Navigate'
          onPress={_=>this.props.navigation.navigate('PageTwo')}
          />
        <NavigatorButton
          title='Push'
          onPress={_=>this.props.navigation.push('PageThree', {count: 1})}
          />
        <NavigatorButton
          title='Push'
          onPress={_=>this.props.navigation.push('PageFour')}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2233ee',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  header: {
    backgroundColor: '#edc',
    justifyContent: 'center',
    height: 80,
  },
  headerText: {
    color: '#000',
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default PageOne

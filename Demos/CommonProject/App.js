/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

type Props = {};

class Item extends Component {
  render(){
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>
          {this.props.number}
        </Text>
      </View>
    )
  }
}

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.redView}>
        {
          [1, 2, 3].map(number=><Item key={number} number={number}/>)
        }
        </View>
        <View style={styles.greenView}>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number=><Item key={number} number={number} />)
        }
        </View>
        <View style={styles.blueView}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(number=><Item key={number} number={number} />)
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    // alignContent: 'stretch',
    backgroundColor: '#F5FCFF',
  },

  redView: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },

  greenView: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'blue',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  blueView: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'blue',
    padding: 20,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
  },

  item: {
    width: 50,
    height: 50,
    backgroundColor: 'orange',
    justifyContent:'center',
  },

  itemText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
});

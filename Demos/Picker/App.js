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
  View,
  Picker,
  PickerIOS,
} from 'react-native';

type Props = {}

const cities = [
  {label: '北京', value: 'bj'},
  {label: '上海', value:'sh'},
  {label: '广州', value:'gz'},
  {label: '深圳', value:'sz'},
];

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {selectedValue: '梨子', city:'sz'}
  }
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedValue}
          itemStyle={{color: 'red', fontSize: 20}}
          onValueChange={(itemValue, itemPosition)=>{
            console.log(itemValue, itemPosition);
            this.setState({selectedValue: itemValue});
          }}
          >
          <Picker.Item label='Apple' value='苹果' />
          <Picker.Item label='Orange' value='橘子' />
          <Picker.Item label='Banana' value='香蕉' />
          <Picker.Item label='Pear' value='梨子' />
        </Picker>
        <PickerIOS
          selectedValue={this.state.city}
          onValueChange={(city)=>{
            this.setState({city: city})
          }}
          itemStyle={{color: 'green', fontSize: 30}}
          >
          {
            cities.map((city, index)=><Picker.itemIOS key={index} {...city}/>)
          }
        </PickerIOS>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: 'red',
    fontSize: 20,
    textAlign: 'center',
  },
});

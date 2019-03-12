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
  DatePickerIOS,
  Alert,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={selectedDate: new Date()}
    this.getPreMonthAndNextMonth()
  }

  getPreMonthAndNextMonth() {
    const date = new Date()
    let minimumDate, maximumDate
    const currentYear = date.getYear()
    const month = date.getMonth()
    if (month == 0) {
      minimumDate = date.setFullYear(currentYear - 1, 11)
      maximumDate = date.setMonth(month + 1)
    }else if (month == 11) {
      minimumDate = date.setMonth(month - 1)
      maximumDate = date.setFullYear(currentYear + 1, 0)
    }else {
      minimumDate = date.setMonth(month - 1)
      maximumDate = date.setMonth(month + 1)
    }
    this.minimumDate = new Date(minimumDate)
    this.maximumDate = new Date(maximumDate)
  }


  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.selectedDate}
          mode='date'
          minimumDate={this.minimumDate}
          maximumDate={this.maximumDate}
          onDateChange={(date)=>{
            this.setState({selectedDate: date})
            Alert.alert('日期', `选中了日期:${date.toLocaleDateString()}`)
          }}
          />
        <DatePickerIOS
          date={new Date()}
          mode='datetime'
          minuteInterval={5}
          />
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
});

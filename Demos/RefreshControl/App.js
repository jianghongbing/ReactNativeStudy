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
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

type Props = {}

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={reload:false, loadMore: false, number: 4}
  }

  getData() {
    let data = []
    for(let i=0; i<=this.state.number; i++){
      data.push(i)
    }
    return data
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.getData()}
          renderItem={({item, index})=>{
            const colors = ['red', 'green', 'blue']
            return (
              <View style={[styles.item, {backgroundColor: colors[index % 3]}]}>
                <Text style={styles.text}>{item}</Text>
              </View>
            )
          }}
          horizontal={false}
          numColumns={4}
          keyExtractor={(item, index)=>`index:${index}`}
          refreshControl={
            (
              <RefreshControl
                refreshing={this.state.reload}
                onRefresh={()=>{
                  this.setState({reload: true})
                  setTimeout(()=>this.setState({reload: false, number: 4}), 1000)
                }}
                tintColor='red'
                title='下拉刷新'
                titleColor='orange'
                />
            )
          }
          ListFooterComponent={
            (
              <View>
                <ActivityIndicator
                  animating={this.state.loadMore}
                  hidesWhenStopped={false}
                  />
                <Text style={{color: 'red', fontSize: 16, textAlign: 'center', marginTop: 8}}>上拉加载更多</Text>
              </View>
            )
          }
          onEndReachedThreshold={0}
          onEndReached={()=>{
            this.setState({loadMore: true})
            setTimeout(()=>{
              const number = this.state.number + 10
              this.setState({loadMore: false, number: number})
            }, 1000)
          }}
          >
        </FlatList>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
  },
  content: {
    justifyContent: 'flex-end',
  },
  list: {
    // justifyContent: 'flex-end',
  },
  item: {
    width: Dimensions.get('screen').width / 4.0,
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

});

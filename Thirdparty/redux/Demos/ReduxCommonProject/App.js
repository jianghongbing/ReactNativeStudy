/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
} from 'react-native'

import { fetchMovies } from './src/actions/movieAction'
import { connect } from 'react-redux'
import { MovieCell } from './src/components/MovieCell'
import { ListEmptyView } from './src/components/ListEmptyView'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchMovies())
  }

  render() {
    const { items, isLoading, error } = this.props
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
              style={styles.listView}
              data={items}
              renderItem={this.renderItem}
              keyExtractor={(item)=>item.id}
              initialNumToRender={20}
              ItemSeparatorComponent={()=>(<View style={styles.separator}/>)}
              ListEmptyComponent={()=>(<ListEmptyView isLoading={isLoading} error={error}/>)}
          />
        </SafeAreaView>
    )
  }

  renderItem = ({item})=>(<MovieCell {...item}/>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  listView: {

  },

  text: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
  },

  separator: {
    backgroundColor: '#eee',
    height: 1.0,
    marginHorizontal: 15,
  },
})


const mapStateToProps = (state)=>({
  ...state.movies,
})

export default connect( mapStateToProps )(App)
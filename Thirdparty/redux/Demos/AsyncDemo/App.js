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
} from 'react-native'

import { fetchMovies, refetchMovies, fetchMoveMovies } from './src/actions/movieAction'
import { connect } from 'react-redux'
import { MovieCell } from './src/components/MovieCell'
import { ListEmptyView } from './src/components/ListEmptyView'
import { ListFooter } from './src/components/ListFooter'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(fetchMovies())
  }

  render() {
    const { items, isLoading, error, isReload, didLoadAllMovies} = this.props
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
              style={styles.listView}
              data={items}
              renderItem={this._renderItem}
              keyExtractor={(item, index)=>`${item.id} + ${index}`}
              initialNumToRender={20}
              ItemSeparatorComponent={()=>(<View style={styles.separator}/>)}
              ListEmptyComponent={()=>(<ListEmptyView isLoading={isLoading} error={error}/>)}
              refreshing={isReload}
              onRefresh={this._onRefresh}
              ListFooterComponent={(<ListFooter didLoadAllMovies={didLoadAllMovies}/>)}
              onEndReachedThreshold={0.01}
              onEndReached={this._onEndReached}
          />
        </SafeAreaView>
    )
  }

  _renderItem = ({item})=>(<MovieCell {...item}/>)
  _onRefresh = ()=>{
    this.props.dispatch(refetchMovies())
  }
  _onEndReached = ()=>{
    this.props.dispatch(fetchMoveMovies())
  }
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
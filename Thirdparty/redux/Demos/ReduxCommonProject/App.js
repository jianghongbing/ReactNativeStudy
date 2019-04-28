/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Counter from './src/components/Counter'
import * as CounterActions from './src/actions/counterActions'
import * as CityActions from './src/actions/cityActions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state)=>({
  count: state.counter,
  cityList: state.city,
})

const mapDispatchToProps = (dispatch)=>bindActionCreators({...CounterActions, ...CityActions}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
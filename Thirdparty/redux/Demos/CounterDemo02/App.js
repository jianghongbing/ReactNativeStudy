/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Counter from './src/Counter'
import { connect } from 'react-redux'
import * as Actions from './src/actions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state)=>({
  count: state,
})

const mapDispatchToProps = (dispatch)=>bindActionCreators(Actions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Counter)
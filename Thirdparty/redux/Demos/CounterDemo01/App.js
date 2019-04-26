/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Counter from './src/Counter'
import { increment, decrement} from './src/actions'

const mapStateToProps = (state)=>({
  count: state,
})

const mapDispatchToProps = (dispatch)=>({
  increment: ()=>dispatch(increment()),
  decrement: ()=>dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
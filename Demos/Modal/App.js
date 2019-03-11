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
  TouchableOpacity,
  Text,
  Modal,
  Alert,
} from 'react-native';

type Props = {}

// class Page extends Component {
//   constructor(props){
//     super(props)
//     this.state={visible: false}
//   }
//   render(){
//     return (
//       <View>
//         <Modal>
//           // <Page number={this.props.nubmer}/>
//         </Modal>
//         <Text style={styles.text}>
//           {`Page:${this.props.number}`}
//         </Text>
//         <TouchableOpacity
//             style={styles.button}
//             activeOpacity={0.9}
//             onPress={()=>{
//               // const visible = !this.state.visible
//               // this.setState({visible: visible})
//             }}
//             >
//             <Text
//               style={styles.buttonText}>
//               Modal A New Page
//             </Text>
//           </TouchableOpacity>
//         {
//           this.props.number > 0 &&
//           <TouchableOpacity
//               style={styles.button}
//               activeOpacity={0.9}
//               onPress={()=>{
//                 // const visible = !this.state.visible
//                 // this.setState({visible: visible})
//               }}
//                 >
//               <Text
//                 style={styles.buttonText}>
//                 Dismiss
//               </Text>
//             </TouchableOpacity>
//         }
//       </View>
//     )
//   }
// }


export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={visible: false}
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Page number={0}/>
      // </View>
      <View style={styles.container}>
        <Modal
          visible={this.state.visible}
          animationType='slide'
          transparent={true}
          onShow={()=>{
            Alert.alert('onShow')
          }}
          onDismiss={()=>{
            Alert.alert('onDismiss')
          }}
          onOrientationChange={()=>{
            Alert.alert('onOrientationChange')
          }}
          supportedOrientations={['portrait', 'landscape']}
          >
          <View style={[styles.container,{backgroundColor: 'orange'}]}>
            <Text style={styles.text}>Page Two</Text>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={()=>{
              const visible = !this.state.visible
              this.setState({visible: visible})
            }}
              >
            <Text
              style={styles.buttonText}>
              Dismiss
            </Text>
          </TouchableOpacity>
          </View>
        </Modal>
        <Text style={styles.text}>Page One</Text>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.9}
          onPress={()=>{
            const visible = !this.state.visible
            this.setState({visible: visible})
          }}
            >
          <Text
            style={styles.buttonText}>
            Modal Page Two
          </Text>
        </TouchableOpacity>
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
  button: {
    margin: 10,
    backgroundColor: '#3344FF',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

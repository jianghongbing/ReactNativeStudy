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
  Alert,
  Text,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

type Props = {}

const data = [
  {
    name: '小明',
    school: '第一初级中学',
    className: '三年一班',
    intro: '小明是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小武',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小武这个学期的进步很大,仍需努力'
  },
  {
    name: '小乐',
    school: '第一初级中学',
    className: '三年一班',
    intro: '小乐是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小飞',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小飞这个学期的进步很大,仍需努力'
  },
  {
      name: '小文',
      school: '第一初级中学',
      className: '三年一班',
      intro: '小文是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
      name: '小李',
      school: '第一初级中学',
      className: '三年二班',
      intro: '小李这个学期的进步很大,仍需努力'
  },
  {
      name: '筱筱',
      school: '第一初级中学',
      className: '三年一班',
      intro: '筱筱是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人,筱筱是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人筱筱是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小张',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小张这个学期的进步很大,仍需努力,小张这个学期的进步很大,仍需努力,小张这个学期的进步很大,仍需努力,小张这个学期的进步很大,仍需努力'
  },
  {
    name: '小宋',
    school: '第一初级中学',
    className: '三年一班',
    intro: '小宋是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小柳',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小柳这个学期的进步很大,仍需努力'
  },
  {
    name: '小明',
    school: '第一初级中学',
    className: '三年一班',
    intro: '小明是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小武',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小武这个学期的进步很大,仍需努力'
  },
  {
    name: '小乐',
    school: '第一初级中学',
    className: '三年一班',
    intro: '小乐是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小飞',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小飞这个学期的进步很大,仍需努力'
  },
  {
      name: '小文',
      school: '第一初级中学',
      className: '三年一班',
      intro: '小文是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
      name: '小李',
      school: '第一初级中学',
      className: '三年二班',
      intro: '小李这个学期的进步很大,仍需努力'
  },
  {
      name: '筱筱',
      school: '第一初级中学',
      className: '三年一班',
      intro: '筱筱是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人,筱筱是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人筱筱是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小张',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小张这个学期的进步很大,仍需努力,小张这个学期的进步很大,仍需努力,小张这个学期的进步很大,仍需努力,小张这个学期的进步很大,仍需努力'
  },
  {
    name: '小宋',
    school: '第一初级中学',
    className: '三年一班',
    intro: '小宋是一个很优秀的同学,品学兼优,学习很努力,为人友善,乐于帮助他人'
  },
  {
    name: '小柳',
    school: '第一初级中学',
    className: '三年二班',
    intro: '小柳这个学期的进步很大,仍需努力'
  },
]

class StudentInfo extends Component {
  render(){
    const {name, school, className, intro} = this.props
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.school}>{school}</Text>
        <Text style={styles.school}>{className}</Text>
        <Text style={styles.intro}>{intro}</Text>
      </View>
    )
  }
}



export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={refreshing: false}
  }


  separator=()=>{
    return (
      <View style={{backgroundColor: 'gray', height: 1.0}}/>
    )
  }
  emptyView=()=>{
    return (
      <View style={{justifyContent: 'center'}}>
        <Text style={{color: 'orange', fontSize: 30, textAlign: 'center'}}>暂无数据</Text>
      </View>
    )
  }
  header=()=>{
    return (
      <View style={styles.header}>
        <Text style={{color: 'blue', fontSize: 50, textAlign: 'center'}}>学生信息</Text>
      </View>
    )
  }

  footer=()=>{
    return (
      <View style={styles.footer}>
        <Text style={{color: 'white', fontSize: 30, textAlign:'center'}}>学生信息尾部</Text>
      </View>
    )
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.listView}
          contentContainerStyle={!data.length && {justifyContent:'center', flex: 1}}
          scrollEnabled={data && data.length}
          data={data}
          renderItem={({item, index})=><StudentInfo {...item}/>}
          ItemSeparatorComponent={this.separator}
          ListEmptyComponent={this.emptyView}
          ListHeaderComponent={this.header}
          ListFooterComponent={this.footer}
          initialNumToRender={10}
          initialScrollIndex={5}
          keyExtractor={(item, index)=>{
            return `${item.name}${index}`
          }}
          onEndReachedThreshold={0.2}
          onEndReached={({distanceFromEnd})=>{
            console.log(distanceFromEnd)
          }}
          onRefresh={()=>{
            this.setState({refreshing: true})
            setTimeout(()=>{
              this.setState({refreshing: false})
            }, 1000)
          }}
          refreshing={this.state.refreshing}
          />
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
  },
  listView: {
    // backgroundColor: 'red',
    // backgroundColor: 'rgba(255, 255, 255, 0)',
  },

  listViewContainer: {
    justifyContent: 'center',
  },


  item: {
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 20,
  },

  name: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },

  school: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  intro: {
    color: '#ff3322',
    fontSize: 14,
  },
  header: {
    padding: 10,
    backgroundColor: 'red',
  },
  footer: {
    padding: 10,
    backgroundColor: 'green',
    marginTop: 10,
  }
});

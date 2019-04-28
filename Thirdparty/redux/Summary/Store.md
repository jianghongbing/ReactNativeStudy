# Store

保存数据的地方, 你可以把它看成一个容器. **整个应用只能有一个Store**. 当需要拆分数据处理逻辑时, 应该使用reducer组合, 而不是创建多个store

## Store相关的api

* createStore: 该函数接受连个参数reducer和initialState, 用于创建一个store对象.
  * reducer: 一个reducer函数.
  * initialState: 可选参数,用于表示store的初始状态
* dispatch: 发送某个action, 引起state发生变化
* getState: 获取当前时刻的state对象
* subscribe: 订阅某个函数,当state发生变化时,会回调该函数.subscribe函数返回一个函数,如果调用了返回的函数,则取消已订阅的函数




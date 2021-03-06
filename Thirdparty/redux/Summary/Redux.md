# Redux

Redux是JavaScript状态容器, 提供可预测化的状态管理. 可以让你构建一致化的应用, 运行于不同的环境(客户端,服务器,原生应用), 并且易于测试.

## Redux的基本概念

### [Store](./Store.md)

Store就是保存数据的地方, 可以把它看成一个容器. 整个应用只能有一个Store.

### State

Store对象包含所有数据. 如果想得到某个时点的数据, 就要对Store生成快照. 这种时点的数据集合, 就叫做State. 也可以看做是某个时刻Store的状态. 当前时刻的State, 可以通过store.getState()拿到.

### [Action](./Action.md)

State的变化, 会导致View的变化. 但是用户接触不到State, 只能接触到View. 所以State的变化必须是View导致的. Action就是View发出的通知, 表示State应该要发生变化了. 只能通过发送action去改变状态, 而不能手动的去改变state的值. 通过store的dispatch方法来发送action.

### [Reducer](./Reducer.md)

Store收到Action以后, 必须给出一个新的State, 这样View才会发生变化. 这种State的计算过程就叫做Reducer. Reducer是一个函数, 它接受Action和当前State作为参数, 返回一个新的State. Reducer函数最重要的特征是, 它是一个纯函数. 也就是说, 只要是同样的输入, 必定得到同样的输出. Store 允许使用store.subscribe方法设置监听函数, 一旦 State 发生变化, 就自动执行这个函数.

### 纯函数: 只要是同样的输入, 必定得到同样的输出. 纯函数必须遵守以下一些约束.

* 修改传入参数
* 执行有副作用的操作, 如API请求和路由跳转;
* 调用非纯函数, 如Date.now()或Math.random()

### [Middleware](./Middleware.md): 中间件

## Redux的基本原则

* 单一数据源: 整个应用的state被储存在一棵object tree中, 并且这个object tree只存在于唯一一个store中.
* State是只读的: 唯一改变state的方法就是触发action, action是一个用于描述已发生事件的普通对象.
* 使用纯函数来执行修改:为了描述action如何改变 state tree, 你需要编写 reducers.

## Redux的API

* createStore: 该函数接受3个参数
  * reducer: 一个reducer函数
  * preloadedState: 可选参数,整个应用的权局初始状态数据
  * enhancer: 一个组合store creator的高阶函数, 返回一个新的强化过的store creator. 这与middleware相似, 它也允许你通过复合函数改变store接口.
* combineReducers: 把多个reducer合并成一个最终的reducer函数, 然后就可以对这个reducer调用createStore方法.
* applyMiddleware: 使用包含自定义功能的middleware来扩展Redux, 是一种推荐的方式. Middleware可以让你包装store的dispatch方法来达到你想要的目的
* bindActionCreators: 把一个value为不同action creator的对象, 转成拥有同名key的对象. 同时使用dispatch对每个action creator进行包装,以便可以直接调用它们.
* compose: 从右到左来组合多个函数. 这是函数式编程中的方法, 为了方便,被放到了Redux里. 当需要把多个 store enhancer依次执行的时候,需要用到它.


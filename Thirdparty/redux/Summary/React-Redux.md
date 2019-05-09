# React Redux

为了方便在React中使用Redux, Redux的作者封装了React专用的库React-Redux. 在React-Redux中, 组件分为两大类, UI组件和容器组件. React-Redux 规定, 所有的UI组件都由用户提供, 容器组件则是由React-Redux自动生成. 也就是说, 用户负责视觉层, 状态管理则是全部交给它. 

## UI组件

UI组件只负责UI的呈现, 不负责任何的数据逻辑

### UI组件的特点

* 只负责UI的呈现, 不带有任何业务逻辑
* 没有状态(即不使用this.state这个变量)
* 所有数据都由参数(this.props)提供 
* 不使用任何Redux的API

## 容器组件

容器组件负责处理业务相关的数据逻辑, 不处理UI相关的呈现.

### 容器组件的特点

* 负责管理数据和业务逻辑, 不负责UI的呈现
* 带有内部状态
* 使用Redux的API

## UI组件和容器组件之间的联系

一般来说, UI组件和容器组件是两个独立的, 它们之间可以没有任何联系, 当一个组件既包含UI又要处理业务逻辑的时候, 此时我们需要将该组件拆分成一个容器组件和UI组件, 容器组件包含该UI组件, 容器组件提供数据给该UI组件, 由UI组件渲染出视图

## React-Redux相关api

* connect: 用于从UI组件生成容器组件. connect的意思, 就是将这两种组件连起来.
* mapStateToProps: 一个函数. 它的作用就是像它的名字那样, 建立一个从(外部的)state对象到(UI组件的)props对象的映射关系. 该函数会作为connect函数的第一个参数, connect方法可以省略mapStateToProps参数, 那样的话, UI组件就不会订阅Store, 就是说Store的更新不会引起UI组件的更新. 作为函数, mapStateToProps执行后应该返回一个对象, 里面的每一个键值对就是一个映射, 会传递给UI组件的props. 该函数接收state和ownProps作为其参数. 

```javascript

const mapStateToProps = (state)=>({
  name: state.name,
  id: state.id,
})

```

* mapDispatchToProps: connect函数的第二个参数, 用来建立UI组件的参数到store.dispatch方法的映射. 也就是说, 它定义了哪些用户的操作应该当作 Action, 传给Store. 它可以是一个函数,也可以是一个对象. 如果mapDispatchToProps是一个函数, 会得到dispatch和ownProps(容器组件的props对象)两个参数. 

```javascript

const mapDispatchToProps = (dispatch)=>({
  onClick: dispatch(actionCreator())
})

//如果mapDispatchToProps是一个对象, 它的每个键名也是对应UI组件的同名参数, 键值应该是一个函数, 会被当作Action creator, 返回的Action会由 Redux自动发出. 举例来说, 上面的mapDispatchToProps写成对象就是下面这样.

const mapDispatchToProps = {
  onClick: ()=>({
    type: 'INCREMENT'
  })
}

```

## Provider组件: 用于传递store给容器组件

connect方法生成容器组件以后, 需要让容器组件拿到state对象, 才能生成UI组件的参数. 一种解决方法是将state对象作为参数, 传入容器组件. 但是这样做比较麻烦, 尤其是容器组件可能在很深的层级, 一级级将state传下去就很麻烦. React-Redux提供Provider组件, 可以让容器组件拿到state.

```jsx harmony

const CounterDemo = () => (<Provider store={store}>
  <App />
</Provider>)

```

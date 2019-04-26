# Action

在Redux中,通过某个action去改变state中的数据然后重新渲染界面.通过Store的dispatch函数去派发一个action. `store.dispatch(action)`

## Action的创建方式

每个action本质上是一个对象,该对象中必须包含一个type属性的值,在redux中通过是通过type来区分不同的action类型

* 通过字面量来创建一个对象

```javascript
const action = {type: 'INCREMENT'}
store.dispatch(action)
```

* 通过Action创建函数来创建action

```javascript
const addTodo = (text)=>({type: 'ADD_TODO', text})
```

## Action的type

通常action的type为一个常量字符串

```javascript
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
```


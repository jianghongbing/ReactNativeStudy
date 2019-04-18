# Refs: 组件引用

Refs提供了一种方式,用于访问在render方法中创建的DOM节点或React元素.在RN中引用的是某个组件. 在典型的React数据流中, 属性（props是父组件与子组件交互的唯一方式. 要修改子组件,你需要使用新的props重新渲染它. 但是,某些情况下你需要在典型数据流外强制修改子组件. 要修改的子组件可以是React 组件的实例,也可以是DOM元素. 尽量通过state来控制子组件的状态,少用refs去强制更新组件的状态

## 创建引用的两种方式

* 通过React提供的createRef()函数来创建一个引用
* 通过回调的方式来创建引用

```
//通过createRef()创建引用
  this.firstRef = React.createRef()
  ref={this.firstRef}

//通过回调的方式创建引用
  this.secondRef = null
  ref={textInput=>this.secondRef=textInput}    
```

上面两种方式创建ref的区别通过createRef()创建的引用,需要通过该ref的current属性来访问引用的组件.而通过回调的方式是直接将引用指向组件.即上面如果想通过引用来访问组件,第一种方式是this.firstRef.current,第二种方式是this.secondRef.



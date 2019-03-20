# Navigation

在Navigator中的页面组件都会自动获得navigation的属性,该属性包含便捷的方法用于触发导航操作.

## Navigation中的属性的方法

### navigate: 导航到另一个页面
如果该页面还没有创建,就创建新的页面,并且跳转,如果该页面已经在导航中,如navigate方法将跳转到已经加载的页面,而不会重新创建一个新的页面.

#### 该方法的使用说明如下

```JavaScript
this.props.navigation.navigate(routeName, params, action)
//或者
this.props.navigation.navigate({routeName, params, action, key})
```

#### navigate方法参数说明

* routeName:已经在路由器中注册的路由
* params: 合并到目标路由的参数
* action: 如果页面是navigator,则是子路由中运行的子操作
* key: 要导航到的路由的可选标识符.如果已存在,将后退到此路由

### goBack: 关闭当前页面并返回上一个页面

可以选择提供一个key,指定要返回的路由.默认情况下,goBack将关闭调用该方法的页面.

### addListener: 监听导航生命周期

react-navigation 将事件发送到订阅了它们的页面组件
* willFocus: 页面将获取焦点的回调
* didFocus: 页面已获取到焦点的回调(如果有过渡动画,等过渡动画执行完成后响应)
* willBlur: 页面将失去焦点的回调

### isFocused: 判断页面是否获取到焦点

### state: 当前的state或route, `this.props.navigation.state`返回路由信息

### setParams: 对路由的参数进行更改

### getParam: 获取路由参数

### dispatch: 向路由发送action

### dangerouslyGetParent: 返回父级的navigator

## Stack Navigation 栈导航

Stack Navigation除了有Navigation的一些方法之外, 还有一些自己特性的方法

### push: 在栈顶部添加一个路由,然后跳转到该路由.

该方法的使用方式的接受参数和navigate方法类似.push每次都会新建一个界面,然后添加到栈顶.

### pop: 返回到上一个路由,如果指定一个参数n,则返回到前n层的路由

### replace: 用另一个路由替换指定的路由,会替换掉当前的界面

#### replace方法接受参数说明
* key: 被替换的路由的key,如果未指定,最近的路由将会被替换
* newKey: 用于替换路线的key,如果未提供,则自动生成.
* routeName: 替换路由
* params: 要传入替换路由的参数.
* action: 可选的子动作。
* immediate:

### popToTop: 直接跳转到栈底,并销毁其它所有页面

### reset: 使用新的state替代当前的state

Reset操作会擦除整个导航状态,并将其替换为多个操作的结果.

#### reset参数说明

* index: 路由数组中state的活动路由的索引
* actions: 将取代当前导航状态的导航行为数组.
* key: 如果设置,具有给定key的导航器将重置,如果为null,则根导航器将重置.

### dismiss: 关闭当前堆栈

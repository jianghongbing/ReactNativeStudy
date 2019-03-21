# NavigationActions: 导航操作

通过NavigationAction 提供的api来创建某个操作,然后通过navigation的dispatch来派发该动作

## NavigationActions支持的操作

###  <h3 id='navigate'>导航到另一条路由</h3>

```JavaScript
const action = NavigationActions.navigate({
  routeName: 'FirstPage',
  params: {
    //参数
   }.
  action: subAction,//子动作
  key: key,//要导航到的路由的标识符.如果已存在, 则导航回此路由
})
```

* routeName: 需要导航到的路由名称,已在应用程序的路由器中注册的目标路由名称
* params: 设置导航路由参数
* action: 如果屏幕是导航器,则在子路由器中运行的子操作
* key: 需要导航到的路由的标识符,如果已存在,则导航会此路由

### back: 返回到上一个页面或者回到指定key的界面

```JavaScript
const action = NavigationActions.back({key:'PageOne'})
this.props.navigation.dispatch(action)
```

* key: 如果设置,导航将从给定的Key返回.如果没有设置,则返回到上一个页面

### setParams: 修改某个key的路由的参数,当分发SetParams时,路由将产生一个新的状态,该状态改变了特定路由的参数

```JavaScript
const action = NavigationActions.setParams({
  key: 'RouteKey',
  params:{nubmer: 100},
})
this.props.navigation.dispatch(action)
```

* params:必填, 新的参数将被合并到现有的路由参数中
* key: 必填,应该得到新参数的路由的key

### init: 用于在状态未定义时初始化第一个状态

## StackActions: 栈导航的操作

### push: 在堆栈顶部添加一个路由,然后跳转到该路由.key的说明参考 [navigate操作](#navigate)

```JavaScript
const action = StackActions.push({
  routeName: 'myRoute',
  params:{},
  actions:[],
})
```

### pop: 返回到堆栈中上一个路由或通过设置参数n,可以指定返回的层次

* n: 指定返回的层次

### popToTop: 返回到根路由

### replace: 用另一个路由替换指定的路由.

```JavaScript
const action = StackActions.replace({
  key: 'aKey',
  newKey: 'aNewKey',
  routeName:'MyPage',
  params: {}, //参数
  action: actionObj,
  immediate: true,
})
```

* key: 被替换的路由的key,如果未指定,最近的路由将会被替换
* newKey: 用于替换路由的key,如果未提供,则自动生成.
* routeName: 替换的路由名
* params: 要传入替换路由的参数.
* action: 可选的子动作。
* immediate:立即执行

### reset: 重置整个导航状态,并将其替换为多个操作的结果.

```JavaScript
const action = StackActions.reset({
  index: 1,
  actions:[
    NavigationActions.navigate({
      routeName: 'StackActions'
    }),
    NavigationActions.navigate({
      routeName: 'DestinationPage',
    })
  ],
  key: 'StackNavigatorKey',
})

//创建一个reset action, 用actions里面的路由替换掉当前栈的路由,也就有用两个界面(StackActions, DestinationPage)替换掉之前栈中的所有界面,并且显示路由在栈中所有路由的位置为index的界面,在该例子中是DestinationPage.

this.props.navigation.dispatch(action)
```
* index: 用于指定当前活动路由,也就是活动路由在路由素组中的位置
* actions: 将取代导航状态的导航行为数组
* key: 如果设置,具有给定key的导航器将重置.如果为null,则根导航器将重置

## DrawerActions: 抽屉操作

### openDrawer: 打开抽屉

### closeDrawer: 关闭抽屉

### toggleDrawer: 如果抽屉是打开的,就关闭;如果抽屉是关闭的就打开

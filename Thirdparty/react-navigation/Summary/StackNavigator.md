# StackNavigator: 栈导航

类似于iOS中的UINavigationController的角色

## 栈导航的使用

### 创建栈导航步骤

1. 从react-navigation中导入createStackNavigator函数
2. 创建Stack Navigator
3. 将StackNavigator放入容器AppContainer内.

```JavaScript
import { createNavigator, createAppContainer } from 'react-navigation'

const StackNavigator = createStackNavigator({
  Page: MyPage
})

const AppContainer = createAppContainer(StackNavigator)

export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    )
  }
}
```

## 栈导航的相关api

* createStackNavigator(RouteConfigs, StackNavigatorConfig): 创建一个导航组件
  * RouteConfigs: 路由配置,路由配置对象是从路由名称到路由配置的映射,它告诉导航器该路由呈现的内容.
  * StackNavigatorConfig: 路由导航设置,界面跳转过程中的设置

### RouteConfig: 路由配置对象

createStackNavigator函数的第一个参数, RouteConfig对象中的每个key(如下所示的PageOne,PageTwo)对应着一个路由对象,即对应着一个界面.

```JavaScript
const StackNavigator = createStackNavigator({
  PageOne:{
    screen: PageOne,
    path: 'app/:name', //
    navigationOptions:({navigation})=>{
      title: 'PageOne'
    }
  },
  PageTwo:{

  }
})
```

* screen: 必选,指定一个React组件作为屏幕的主要显示内容,当这个组件被createStackNavigator加载时,会给组件的props分分配一个navigation属性.表示一个加入到导航中的界面
* path: 用来设置支持schema跳转时使用,具体使用会在下文的有关Schema章节中讲到
* navigationOptions: 导航选项,由于当前界面的导航栏

#### navigationOptions中的key的说明

* title: 导航栏的标题
* header: 自定义导航栏,会覆盖title和header的值
* headerTitle: 标题,如果设置了该值,会覆盖title的值
* headerBackTitle: 导航栏的返回标题
* headerTitleAllowFontScaling: 是否可以通过设置里面的文字大小来缩放标题,默认值都是true.
* headerBackAllowFontScaling: 是否可以通过设置里面的文字大小来缩放返回标题,默认为false.
* headerBackImage:导航栏默认返回按钮的图片
* headerTitleStyle: 标题组件样式
* headerBackTitleStyle: 返回标题组件样式
* headerTintColor: 头部的tintColor,会改变标题文字和头部组件item的颜色
* headerLeftContainerStyle: 头部左边的容器样式
* headerRightContainerStyle: 头部右边的容器样式
* headerTransparent: 导航栏是否透明
* headerTruncatedBackTitle: 当标题过长时,可能在返回组件中显示不完整,可用该属性来显示一个返回标题
* headerLeft: 导航栏左边的组件
* headerRight: 导航栏右边的组件
* headerForceInset:
* headerBackground: 头部背景
* headerBackgroundTransitionPreset: 头部背景转场设置.
* gesturesEnabled: 手势返回到上一个界面,iOS上为true, 安卓上为false
* gestureResponseDistance: 手势边缘的距离.
* gestureDirection: 返回手势方向,defalut为从左到右,inverted为从右到左
* params: 提供默认参数

### StackNavigatorConfig: 路由导航配置

StackNavigatorConfig对象用于界面跳转之间的设置

* initialRouteName: 初始路由,也就是栈的最下面的界面的路由
* initialRouteParams: 初始路由的参数
* initialRouteKey: 初始路由的key
* paths: 用来设置支持schema跳转时使用
* mode: 转场动画效果
  * card: 使用标准的iOS和Android屏幕转换,这是默认设置.
  * modal: 页面从屏幕底部滑入,只在iOS上生效,在Android上无效.
* headerMode: 导航栏的呈现方式
  * float: 没有半透明效果的导航栏
  * screen 半透明效果的导航栏
  * none: 隐藏导航栏
* headerBackTitleVisible:  返回标题是否可见.
  * true: 可见
  * false: 不可见
  * fade-in-place: 标题组件交叉淡入淡出而不移动,默认值
  * uikit: iOS的默认行为的近似值
* headerTransitionPreset: 指定在启用headerMode:float时,导航栏如何过渡
* cardStyle:

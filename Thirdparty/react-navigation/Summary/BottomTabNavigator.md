# BottomTabNavigator: 底部标签导航器

## BottomTabNavigator的简单使用

1. 从react-navigation中导入`createBottomTabNavigator` 和 `createAppContainer`函数
2. 通过`createBottomTabNavigator`函数创建底部标签导航器
3. 将创建的标签导航器包裹在app container中

```JavaScript
import {createBottomTabNavigator, createAppContainer} from 'react-navigation'

const BottomTabNavigator = createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig)
const AppContainer = createNavigator(BottomTabNavigator)

```

## createBottomTabNavigator函数

该函数接受两个参数 RouteConfigs 和 BottomTabNavigatorConfig

* RouteConfigs: 表示在标签导航器中的路由的配置
* BottomTabNavigatorConfig: 表示导航器的配置,如初始路由,以及标签栏的全局配置

### RouteConfigs: 标签导航器中的路由的配置

该对象放置着标签导航器的所有的路由,每个key对应的值就是一个路由,和StackNavigator中的路由配置基本一致

```JavaScript
const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile
  }
})
```

#### Route 配置选项

* screen: 组件,一般表示某一个界面
* path: 用来设置支持schema跳转时使用
* navigationOptions: 导航选项配置,可以在创建导航器的时候定义,也可以在组件内部定义

```JavaScript
//定义navigationOpitons
//1. 在创建导航器的时候定义
const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    path: 'wechat://me',
    navigationOptions: {
      title: 'Home',

    },
  },
  Profile: {
    screen: Profile
  }
})

//2. 在页面组件中定义
class Home extends Component {
  static navigationOptions = {(navigation)}=>({
    title: 'Home',
  })
}

```

##### navigationOptions: 配置与当前页面相关的选项,不是全局配置.

* title: 标签栏的标题
* tabBarVisible: 在当前界面出现的时候,是否隐藏tabBar
* tabBarIcon: 对应tabBarItem的icon. React元素或给定{focused: boolean, horizontal: boolean, tintColor: string}返回一个 React.Node的函数,用于在标签栏中显示.当设备处于横屏时,horizontal 是 true;当设备处于竖屏时false.每当设备方向发生变化时,都会重新渲染该图标
* tabBarLabel:一个组件,用于显示icon下的文字
* tabBarButtonComponent: React组件,它包装图标和标签并实现onPress.默认情况下是TouchableWithoutFeedback的一个封装,使其其表现与其它可点击组件相同.
* tabBarAccessibilityLabel: 选项卡按钮的无障碍标签
* tabBarTestID: 用于在测试中找到该选项卡按钮的ID.
* tabBarOnPress: item被点击的事件的回调,函数参数是一个对象,其中包含页面的 navigation信息和默认点击的处理defaultHandler

### BottomTabNavigatorConfig: 标签导航器的配置

* initialRouteName: 初始选中的route,也就是默认显示的界面
* order: 定义选项卡顺序的routeNames数组.
* paths: 提供routeName 到 path 配置的映射,它重写routeConfigs中设置的路径,用来设置支持schema跳转时使用
* backBehavior: 控制"返回"按钮是否会导致Tab页切换到初始Tab页.如果是,设置为initialRoute. 默认为initialRoute的行为
* lazy: 是否延迟加载没有显示过的页面,默认为true,只会加载需要显示的路由页面,如果false,将会加载所有路由页面
* tabBarComponent: 覆盖标签栏的组件,用该组件替代
* tabBarOptions: 标签栏的配置
  * activeTintColor: 选中时文字和icon的颜色
  * activeBackgroundColor: 选中的选项卡的背景色
  * inactiveTintColor: 没有选中时,文字和icon的颜色
  * inactiveBackgroundColor: 非选中时,选项卡的颜色
  * showLabel: 是否显示文字
  * showIcon: 是否显示图标
  * style: 选项卡的样式
  * labelStyle: 选项卡中的文字样式
  * tabStyle: 选项卡的样式
  * allowFontScaling: 是否应缩放以尊重文字大小可访问性设置,默认为true
  * safeAreaInset: 为SafeAreaView组件重写forceInset属性

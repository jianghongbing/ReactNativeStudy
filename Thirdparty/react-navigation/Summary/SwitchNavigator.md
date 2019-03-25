# SwitchNavigator: 开关导航器

SwitchNavigator一次只显示一个页面.默认情况下,它不处理返回操作,并在你切换时将路由重置为默认状态.

## SwtichNavigator的创建

通过createSwitchNavigator函数来创建SwitchNavigator,和StackNavigator一样接收两个参数:RouteConfigs和SwitchNavigatorConfig

```JavaScript
import {createSwitchNavigator} from 'react-navigation'
const SwitchNavigator = createSwitchNavigator({
  PageOne: PageOne,
  PageTwo: PageTwo,
}, {
  initialRouteName: 'PageOne',
})
```

## RouteConfigs: 导航器中每个路由的配置,[参考StackNavigator](./StackNavigator.md)

## SwitchNavigatorConfig: 导航器的配置

* initialRouteName: 初始路由
* resetOnBlur: 切换离开屏幕时,重置所有嵌套导航器的状态,默认为true.
* paths: 用来设置支持scheme跳转时使用
* backBehavior: 控制返回按钮是否会导致Tab页切换到初始Tab页,如果是设置为initialRoute,否则none.默认为none行为.


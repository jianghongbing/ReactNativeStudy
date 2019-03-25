# DrawerNavigator: 抽屉导航器

## [抽屉导航器的创建和使用](./StackNavigator.md)

## RouteConfigs: 路由页面配置选项

* drawerLabel: 路由页面
* drawerIcon: 路由页面图标
* drawerLockMode: 抽屉的锁定模式

## DrawerNavigatorConfig: 抽屉导航器的配置

* drawerWidth: 抽屉的宽度
* drawerPosition: 抽屉的位置
  * left: 默认值,抽屉在屏幕的左侧
  * right: 抽屉在屏幕的右侧
* contentComponent: 抽屉内容组件,替换默认的抽屉组件
* contentOptions: 配置抽屉内容选项
* useNativeAnimations: 是否使用原生动画,默认为true
* drawerBackgroundColor: 抽屉背景颜色
* drawerType: 抽屉类型,
  * front: 抽屉在当前路由页面的上面,默认值
  * back: 和slide的效果一致
  * slide: 抽屉在当前路由页面的旁边.
* initialRouteName: 初始路由
* order: 路由名称数组,定义路由在选项卡中的顺序.
* paths: 用来设置支持scheme跳转时使用
* backBehavior: 控制返回按钮是否会导致Tab页切换到初始Tab页,如果是设置为initialRoute,否则none.默认为none行为.

### contentOptions: 配置每个标签item的样式

* items: 路由数组
* activeItemKey: 活动item的key
* activeTintColor: 活动选项卡的图标和文字的颜色
* activeBackgroundColor: 活动选项卡的背景颜色
* inactiveTintColor: 非活动选项卡的背景颜色
* onItemPress: 活动选项卡被点击的回调
* itemsContainerStyle: 内容容器的样式对象
* itemStyle: item的样式
* labelStyle: 文本样式
* activeLabelStyle: 选中状态时的文本样式
* inactiveLabelStyle: 非选中状态文本样式
* iconContainerStyle: 图标容器样式

## DrawerAction

* openDrawer: 打开抽屉
* closeDrawer: 关闭抽屉
* toggleDrawer:抽屉打卡时,关闭抽屉,抽屉关闭时,打开抽屉
# StatusBar: 设置状态栏

## 属性

* animated: 指定状态栏的变化是否应以动画形式呈现
* barStyle: 设置状态栏的样式
  * default: 为dark-content
  * dark-content: 状态栏上的文字为黑色, 默认值
  * light-content: 状态栏上的文字为白色
* backgroundColor: 状态栏的背景色,仅安卓可用
* translucent: 状态栏是否透明,仅安卓可用
* networkActivityIndicatorVisible: 是否显示网络指示器,仅iOS可用
* showHideTransition: 状态栏显示和隐藏的动画
  * fade: 淡入淡出,默认值
  * slide: 滑入滑出

## 方法: 都是静态方法,用于全局的状态栏的配置

* setBarStyle: 设置类的barStyle
* setNetworkActivityIndicatorVisible: 设置是否显示网络指示器
* setBackgroundColor: 设置背景色
* setTranslucent: 设置是否透明
*

# Touchable系列组件,用于自定义带有样式的Button的组件

## TouchableWithoutFeedback

支持触摸,但是没有任何反馈(即用户触摸了该视图,但是没有任何的现象来反馈视图被点击了)的一个基础组件,一般不要使用该组件,而使用继承该组件的TouchableHighlight,TouchableOpacity,TouchableNativeFeedback等相关组件.TouchableWithoutFeedback只支持一个子节点(不能没有子节点也不能多于一个),如果你希望包含多个子组件,可以用一个View来包装它们.

### TouchableWithoutFeedback props

* onPress: 点击后的回调
* onPressIn: 按下去的回调(一按下去就调用该方法,onPress是先按下去在松开后的回调)
* onLongPress: 长按的回调
* onPressOut: 离开后的回调(在onPress之前产生)
* delayLongPress: 长按延迟,从onPressIn开始,到onLongPress被调用的延迟,单位是毫秒.
* delayPressIn: 从触摸操作开始到onPressIn被调用的延迟,单位是毫秒.
* delayPressOut: 从触摸操作结束开始到onPressOut被调用的延迟,单位是毫秒.
* disabled: 如果设为true,则禁止此组件的一切交互.
* hitSlop: 定义了一个范围,在TouchalbeWithFeedback之外的该区域也可以接受touch事件
* onLayout: 布局完成后的回调
* pressRetentionOffset: TouchableWithoutFeedback在不能滚动的ScrollView中指定这个属性,可以决定当手指移开多远距离之后,会不再激活按钮.但如果手指再次移回范围内,按钮会被再次激活.

## TouchableHighlight

用于封装视图,使其可以正确响应触摸操作.当按下的时候,封装的视图的不透明度会降低,同时会有一个底层的颜色透过而被用户看到,使得视图变暗或变亮.TouchableHighlight只支持一个子节点(不能没有子节点也不能多于一个),如果希望包含多个子组件,可以用一个View来包装它们.

### TouchableHighlight props

TouchableHighlight继承了TouchableWithoutFeedback的props,在TouchableWithoutFeedback中props都可以在TouchableHighlight中使用


* activeOpacity: 当TouchableHighlight被按下去的时候,所包装的视图的透明度,默认值为0.85.
* style: 样式
* underlayColor: 高亮时,TouchableHighlight底部的背景色
* onHideUnderlay: 底部背景色隐藏的时候,会调用该方法
* onShowUnderlay: 底部背景色显示的时候,会调用该方法
* hasTVPreferredFocus: 聚焦(适用于apple tv)
* tvParallaxProperties: 视差(适用于apple tv)

## TouchableOpacity

用于封装视图,使其可以响应触摸操作,当按下的时候,封装的视图的不透明度会降低.和TouchableHighlight的区别就是TouchableHighLight比TouchableOpacity在按下的时候多了一个底部背景色

### TouchableOpacity的props和方法

* activeOpacity: 点击的时候,里面的视图的不透明度
* style: 样式
* hasTVPreferredFocus: 聚焦(适用于apple tv)
* tvParallaxProperties: 视差(适用于apple tv)
* setOpacityTo: 设置封装视图的不透明度,和style的opacity的作用一致

## TouchableNativeFeedback

用于封装视图,响应触摸操作(仅限Android平台),在Android设备上,这个组件利用原生状态来渲染触摸的反馈.

### TouchableOpacity的props和方法

* background: 背景,决定在触摸反馈的时候显示什么类型的背景
* useForeground: 前景
* SelectableBackground: 类方法,会创建一个对象,表示安卓主题默认的对于被选中对象的背景
* SelectableBackgroundBorderless: 会创建一个对象，表示安卓主题默认的对于被选中的无边框对象的背景
* Ripple(): 会创建一个对象,当按钮被按下时产生一个涟漪状的背景,你可以通过color参数来指定颜色,如果参数borderless是true.那么涟漪还会渲染到视图的范围之外.
* canUseNativeForeground(): 是否可用原生的native Foreground.

# View

View是一个支持Flexbox布局,样式,一些触摸处理,和一些无障碍功能的容器.并且它可以放到其它的视图里,也可以有任意多个任意类型的子视图. View是创建UI的最基础组件,对应着Native中iOS的UIView以及android中的android.view.View.

## View的属性props

* style: 设置View的样式
* onStartShouldSetResponder: 设置这个视图是否要响应touch start事件,该属性是一个函数对象,该函数接受一个event事件对象,返回一个bool值
* hitSlop: 定义触摸事件在距离视图多远以内时可以触发的.hitSlop的值为一个对象,属性名为top, left, right, bottom
* nativeID: 用来从原生类定位这个视图
* onLayout: 当组件挂载或者布局变化的时候调用,接受一个event的参数,event对象里面有一个layout的属性,layout里面包含该视图x,y,width,height的值,这个事件会在布局计算完成后立即调用一次.
* onMoveShouldSetResponder: 是否响应触摸移动事件,如果返回false,将不会执行onResponderMove的回调
* onResponderMove: 当在手指在view内部移动是会调用该函数
* onResponderGrant: 开始响应触摸事件.在事件开始的时候,调用该方法

* onResponderReject: 响应器正处于活跃状态,并且不会向另一个要求响应这个事件的视图释放这个事件.
* onResponderRelease: 在整个触摸事件结束时调用这个函数.
* onResponderTerminate: 响应终止,如在触摸视图,突然有电话来了.
* onResponderTerminationRequest: 其他某个视图想要成为事件的响应者,并要求这个视图放弃对事件的响应时,就会调用这个函数.如果允许释放响应,就返回true.
* onStartShouldSetResponderCapture: 是否阻止子视图的触摸开始事件,该属性是一个函数,如果返回true,会阻止子视图的触摸开始事件,否则不阻止
* onMoveShouldSetResponderCapture: 是否阻止子视图触摸移动事件,该属性是一个函数,如果返回true,会阻止子视图的触摸移动事件
* pointerEvents: 用于控制当前视图是否可以作为触控事件的目标.
* removeClippedSubviews:在制作滑动控件时,如果控件有很多不在屏幕内的子视图,会非常有用.要让此属性生效,首先要求视图有很多超出范围的子视图.并且子视图和容器视图()或它的某个祖先视图)都应该有样式overflow:hidden.
* testID: 用来在端到端测试中定位这个视图.
* collapsable: 如果一个 View 只用于布局它的子组件,则它可能会为了优化而从原生布局树中移除.把此属性设为false可以禁用这个优化,以确保对应视图在原生结构中存在.
* accessibilityHint: 障碍模式下,定义在距离视图多远以内时,可以触发可访问性的功能
* ccessibilityLabel: 障碍模式下,设置当用户与此元素交互时,读屏器(对视力障碍人士的辅助功能)阅读的文字.默认情况下.这个文字会通过遍历所有的子元素并累加所有的文本标签来构建.
* onAccessibilityTap: 当accessible为true时,如果用户对一个已选中的无障碍元素做了一个双击手势时,系统会调用此函数.
* onMagicTap: 当accessible为true时,如果用户做了一个双指轻触(Magic tap)手势.系统会调用此函数.
* accessible: 当此属性为true时,表示此视图是一个启用了无障碍功能的元素.默认情况下,所有可触摸操作的元素都是无障碍功能元素.
* importantForAccessibility: 控制一个视图在无障碍功能中有多重要,它是否产生一个辅助功能事件.以及它是否能被请求屏幕内容的无障碍服务知晓.只对Android平台生效.
* needsOffscreenAlphaCompositing:
* renderToHardwareTextureAndroid: 决定这个视图是否要把它自己(以及所有的子视图)渲染到一个GPU上的硬件纹理中.
* accessibilityRole:可访问性角色
* accessibilityStates: 可访问性状态
* accessibilityTraits: 可访问性特定
* accessibilityViewIsModal:
* accessibilityElementsHidden: 指示该无障碍元素中包含的无障碍元素是否被隐藏.默认为false.
* accessibilityIgnoresInvertColors:
* shouldRasterizeIOS: 决定这个视图是否需要在被混合之前绘制到一个位图上.

## View使用注意点

* View默认被设计为一个不不需要响应事件的视图,一般如果组件需要响应某个事件,请使用其他组件替代,而不是View,View一般仅作为包裹其他视图的组件
* 如果必须要使用View来响应事件,如开始触摸的响应,属性onStartShouldSetResponder必须给其赋值,并且返回true.如果仅仅只有onResponderGrant的回调是不行的.移动事件和开始触摸事件类似,也需要加上on

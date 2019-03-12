# ScrollView: 可滚动视图

一个可以放置内容的大小比其本身大的组件,可以滚动到其内容的视图的某个部分.

## 属性

* alwaysBounceVertical: 是否总是存在垂直方向上的弹簧效果,即使内容视图垂直方向的高度比scrollView本身的高度还要小的时候.当horizontal为true时,默认值为false,否则为true. 如果在内容视图垂直方向的高度比scrollView本身大的时候,需要控制弹簧效果使用属性bounces. iOS可用
* alwaysBounceHorizontal: 是否总是存在水平方向上的弹簧效果,即使内容视图水平方向的宽度比scrollView本身的宽度还要小的时候.当horizontal为true时,默认值为true,否则为false. 如果在内容视图垂直方向的宽度比scrollView本身大的时候,需要控制弹簧效果使用属性bounces.iOS可用
* bounces: 是否使用弹簧效果,默认为true.
* pagingEnabled: 是否分页.为true时,滚动条会停在滚动视图的尺寸的整数倍位置.默认为false, iOS可用
* scrollEnabled: 是否可以滚动.默认为true
* showsVerticalScrollIndicator: 是否显示垂直方向上的滚动指示器,默认为true.
* showsHorizontalScrollIndicator: 是否显示水平方向上的滚动指示器,默认为true.
* contentContainerStyle: 这些样式会应用到一个内层的内容容器上,所有的子视图都会包裹在内容容器内.
* zoomScale: 滚动视图内容当前缩放比例
* maximumZoomScale: 最大缩放比例
* minimumZoomScale: 最小缩放比例
* bouncesZoom: 当值为true时,使用手势缩放内容可以超过min/max的限制,然后在手指抬起之后弹回min/max的缩放比例.否则的话,缩放不能超过限制.
* keyboardDismissmode: 键盘退出模式
  * none: 不退出
  * on-drag: 滚动scrollView的时候退出键盘
  * interactive: 交互时退出
* keyboardShouldPersistTaps: 如果当前界面有软键盘,那么点击scrollview后是否收起键盘,取决于本属性的设置.
  * never: 点击TextInput以外的子组件会使当前的软键盘收起,此时子元素不会收到点击事件.
  * always: 键盘不会自动收起,ScrollView也不会捕捉点击事件,但子组件可以捕获.
  * handled: 当点击事件被子组件捕获时,键盘不会自动收起.这样切换TextInput时键盘可以保持状态,多数带有TextInput的情况下你应该选择此项.
* onContentSizeChange: 当scrollView的内容大小发生改变时的回调
* onMomentumScrollStart: 当手指离开屏幕时,会产生滚动的动画,滚动动画开始时的回调
* onMomentumScrollEnd: 滚动动画结束后的回调
* onScroll: 滚动的时候的回调
* onScrollBeginDrag: 用户开始拖动滚动视图的回调
* onScrollEndDrag: 用户停止拖动滚动视图的回调
* refreshControl: 下拉刷新控件
* canCancelContentTouches: 当值为false时,一旦有子节点响应触摸操作,即使手指开始移动也不会拖动滚动视图.默认值为true(在以上情况下可以拖动滚动视图)
* centerContent: 当值为true时,如果滚动视图的内容比视图本身小.则会自动把内容居中放置.当内容比滚动视图大的时候.此属性没有作用,默认值为false.
* contentInset: 内容范围相对滚动视图的边缘距离
* contentOffset: 设置内容视图已经滚动的距离
* decelerationRate: 用于决定当用户抬起手指之后，滚动视图减速停下的速度
* stickyHeaderIndices: 一个子视图下标的数组,用于决定哪些成员会在滚动之后固定在屏幕顶端.
* endFillColor:
* overScrollMode: 覆盖默认的overScroll模式
* scrollIndicatorInsets: 滚动指示器的insets
* scrollsToTop: 是否滚动到顶部
* scrollEventThrottle: 设置onScroll事件的回调的频率,1~16之间,默认为0
* 

## 方法

* scrollTo: 滚动到指定位置
* scrollToEnd: 滚动到底部
* flashScrollIndicators: 短暂的显示滚动指示器

# Modal: 模态视图

在当前视图上弹出一个新的视图,相当于iOS中ViewController present一个新的视图出来

## 属性

* visible: modal是否可见
* supportedOrientations: modal出来的节点支持旋转的方向.
* onShow: 模态视图显示后的回调
* onDismiss: 模态视图消失后的回调
* transparent: 背景是否透明
* animationType: 模态过程的动画类型
  * slide: 从底部滑入滑出.
  * fade: 淡入淡出。
  * none: 没有动画,直接蹦出来.默认值
* onOrientationChange: 当modal为显示状态时,屏幕的方向发生改变时的回调
* presentationStyle: 呈现样式类型
  * fullScreen
  * pageSheet
  * formSheet
  * overFullScreen

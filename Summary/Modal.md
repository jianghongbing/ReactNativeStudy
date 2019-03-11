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
* onRequestClose: onRequestClose回调会在用户按下Android设备上的后退按键或是Apple TV上的菜单键时触发.请务必注意本属性在Android平台上为必填,且会在modal处于开启状态时阻止BackHandler事件.
* hardwareAccelerated:是否强制启用硬件加速来绘制弹出层.仅安卓可用

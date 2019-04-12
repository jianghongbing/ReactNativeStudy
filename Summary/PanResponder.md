# PanResponder: 平移手势响应器

PanResponder可以将多个单点触摸操作协调成一个手势,它使得一个单点触摸可以接受更多的触摸操作,也可以用于识别简单的多点触摸手势.

## PanResponder的方法

* create: 创建一个panResponder实例

### create方法的说明

create方法用于创建一个PanResponder对象,该方法接收一个参数config,该参数用于配置PanResponder对象

#### config参数中的key

* onStartShouldSetPanResponder: 是否成为响应者
* onStartShouldSetPanResponderCapture: 是否阻止子视图成为响应者
* onMoveShouldSetPanResponder: 是否成为移动触摸事件响应者
* onMoveShouldSetPanResponderCapture: 是否阻止子视图成为移动触摸响应者
* onPanResponderGrant: 开始响应触摸事件,在事件开始时的回调
* onPanResponderMove: 手势移动的回调
* onPanResponderTerminationRequest: 其他某个视图想要成为事件的响应者,并要求这个视图放弃对事件的响应时,就会调用这个函数.如果允许释放响应,就返回true.
* onResponderTerminate: 事件被终止,如在触摸视图,突然有电话来了.
* onPanResponderReject: 响应器正处于活跃状态,并且不会向另一个要求响应这个事件的视图释放这个事件.
* onShouldBlockNativeResponder: 决定当前组件是否应该阻止原生组件成为JS响应者.默认返回true,目前暂时只支持android.

### config中的每个函数都接受两个参数: event和gestureState

#### event: 事件,一般我们需要获取的是event中nativeEvent原生事件对象,原生事件对象的属性说明如下

* changedTouches: 在上一次事件之后,所有发生变化的触摸事件的数组集合(即上一次事件后,所有移动过的触摸点)
* identifier: 触摸点的 ID
* locationX: 触摸点相对于父元素的横坐标
* locationY: 触摸点相对于父元素的纵坐标
* pageX: 触摸点相对于根元素的横坐标
* pageY: 触摸点相对于根元素的纵坐标
* target: 触摸点所在的元素ID
* timestamp: 触摸事件的时间戳,可用于移动速度的计算
* touches: 当前屏幕上的所有触摸点的集合

#### gestureState: 手势触摸状态,属性说明如下

* stateID: 触摸状态的ID,在屏幕上有至少一个触摸点的情况下,这个ID会一直有效.
* moveX: 最近一次移动时的屏幕横坐标
* moveY: 最近一次移动时的屏幕纵坐标
* x0: 当响应器产生时的屏幕坐标
* y0: 当响应器产生时的屏幕坐标
* dx: 从触摸操作开始时的累计横向路程
* dy: 从触摸操作开始时的累计纵向路程
* vx: 当前的横向移动速度
* vy: 当前的纵向移动速度
* numberActiveTouches: 当前在屏幕上的有效触摸点的数量
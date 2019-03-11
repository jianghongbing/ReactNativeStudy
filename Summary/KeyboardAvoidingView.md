# KeyboardAvoidingView

手机上弹出的键盘有事会挡住当前的视图,KeyboardAvoidingView可以自动根据键盘的位置,调整自身的position或底部的padding,以避免被遮挡.

## 属性

* behavior: 通过该属性来调整keyboardAvoidingView的内容视图避免被遮挡
  * height: 内容视图会逐渐调整到不被键盘遮挡的位置,当键盘退出后,内容视图不会回到原有的位置,不推荐使用该值
  * position: 当键盘弹出时,通过改变内容视图的position使内容视图移动到不被键盘遮挡的位置;键盘退出时,内容视图恢复到原有的位置,推荐使用该值
  * padding: 当键盘弹出时,keyboardAvoidingView的padding的值使内容视图移动到不被键盘遮挡的位置;键盘退出时,内容视图恢复到原有的位置
* enabled: 是否启用keyboardAvoidingView.默认为true,如果为false,keyboardAvoidingView不会在键盘弹出和消失的时候,移动内容视图的位置,此时keyboardAvoidingView就是一个View视图
* contentContainerStyle: 如果设定behavior值为'position',则会生成一个 View作为内容容器.keyboardAvoidingView的内容都放置于该容器中,此属性用于指定此内容容器的样式.
* keyboardVerticalOffset: 键盘垂直偏移

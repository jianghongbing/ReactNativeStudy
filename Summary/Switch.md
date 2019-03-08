# Switch: 开关组件

Switch是一个受控组件,Switch的值一般通过state的值来赋值,通过onValueChange事件,更改state的值,从而改变Switch的值

## 属性

* value: 开关是否打开,默认为false.
* disabled: 开关是否可用
* thumbColor: Switch上圆球的颜色
* tintColor: 开关关闭时,Switch的边框的颜色,该属性不再推荐使用,请使用trackColor代替
* trackColor: 接受一个对象`{true: 'red', false:'blue'}`,在打开时,表示的是开关的背景色,在关闭时,表示的是开关的边框的颜色
* ios_backgroundColor: 仅适用iOS,表示开关关闭时的背景色
* onValueChange: 开关的值发生改变时的回调

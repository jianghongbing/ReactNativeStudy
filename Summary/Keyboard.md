# Keyboard: 用于监听键盘事件,建议使用KeyboardAvoidingView来对键盘事件的行为作出响应.

## 键盘事件类型

* keyboardWillShow: 键盘将要出现事件
* keyboardDidShow: 键盘已经出现事件
* keyboardWillHide: 键盘将要隐藏事件
* keyboardDidHide: 键盘已经退出事件
* keyboardWillChangeFrame: 键盘将要改变frame事件
* keyboardDidChangeFrame: 键盘已经改变frame事件

## 方法

* addListener(eventName,callback):用于注册一个JavaScript函数来监听处理原生键盘通知事件.此方法会返回监听函数的引用.
* removeListener(eventName,callback): 移除某个类型事件的监听函数.
* removeAllListeners(eventName): 移除某个类型事件的所有监听函数.
* dismiss: 把弹出的键盘收回去,同时使当前的文本框失去焦点

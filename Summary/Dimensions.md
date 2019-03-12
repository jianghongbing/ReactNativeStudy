# Dimensions: 用于获取屏幕或者窗口的相关信息

## Dimensions中包含的相关信息

* width: 屏幕的宽度
* height: 屏幕的高度
* scale: 屏幕的像素比, 一个点上的像素的大小
* fontScale: 字体比,在设置中设置的字体大小比,适用于安卓

## 方法

* set: 在原生代码中设置屏幕或者窗口的信息
* get(dim): 获取屏幕或者窗口的信息,dim的值window和screen
* addEventListener: 监听Dimensions的信息的改变,如旋转屏幕导致宽高变化
* removeEventListener: 移除Dimensions的信息的改变的监听

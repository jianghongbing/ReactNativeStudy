# StyleSheet: 样式表 

StyleSheet提供了一种类似CSS样式表的抽象,一般用于创建组件的样式.

## 方法和属性

* create: 创建一个样式表
* flatten: 将一个数组中的样式对象,组合成一个样式.如果有相同的样式属性,后面样式中的属性会覆盖前面样式中属性的值
* setStyleAttributePreprocessor: 设置样式属性预处理.使用一个函数来预处理样式属性的值,不建议使用该函数
* hairlineWidth: 常量始终是一个整数的像素值,并会尽量符合当前平台最细的线的标准.
* absoluteFill: 绝对覆盖,返回一个样式对象,用于完整的覆盖父组件.等价于`{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}`.


# style:样式,用于定义视图的外观

style的定义方式和CSS类似,所有的核心组件都接受名为style的属性.这些样式名基本上是遵循了web上的CSS的命名,只是按照JS的语法要求使用了驼峰命名法.

## style的特点

style属性的值可以是一个对象,也可以是一个数组,和CSS一样,后面相同属性名的值会将前面的给覆盖.

## 元素style样式的写法

* 内联样式: `<View style={{backgroundColor: 'red', width: 100, height: 50}}></View>`直接将元素的样式写在标签中
* 嵌套样式: 通过StyleSheet的create函数创建一个样式集合的对象,然后style属性引用其中的一个样式即可. `<View style={styles.myStyle}></View>`
* 混合样式,style属性接受一个数组,最终元素的样式就是数据里面样式对象综合计算的结果.如`<View style={styles.color, styles.size, {height: 100, width, 40}}></View>`

## react-native中可用于style中的属性名

### view相关

* backgroundColor:背景颜色
* opacity: 不透明度
* elevation:(限Android)使用Android原生的elevation API来设置视图的高度(elevation API)这样可以为视图添加一个投影,并且会影响视图层叠的顺序,此属性仅支持Android5.0及以上版本.

### border边框

* borderColor:边框颜色,上下左右边框颜色的简写
* borderTopColor: 顶部边框的颜色
* borderBottomColor: 底部边框的颜色
* borderBottomColor: 底部边框的颜色
* borderRightColor:右边框的颜色
* borderStyle: 边框样式
* borderWidth: 边框宽度
* borderTopWidth: 上边框的宽度
* borderBottomWidth: 下边框的宽度
* borderLeftWidth: 左边框的宽度
* borderRightWidth: 有边框的宽度
* borderRadius: 边框圆角半径
* borderTopLeftRadius: 左上角圆角半径
* borderTopRightRadius: 右上角圆角半径
* borderBottomLeftRadius: 左下角圆角半径
* borderBottomRightRadius: 右下角圆角半径

### margin外边距
* margin:上下左右边距的简写
* marginBottom:底部边距
* marginEnd:如果布局为ltr,表示右边距;如果为rtl,表示左边距
* marginHorizontal:水平方向上的边距
* marginLeft:左边距
* marginRight: 右边距
* marginStart:如果布局为ltr,表示左边距;如果为rtl,表示右边距
* marginTop: 顶部边距
* marginVertical: 垂直方向上的边距

### padding内边距

* padding: 上下左右内边距的缩写
* paddingBottom: 底部内边距
* paddingEnd: 如果布局为ltr,表示右内边距,如果为rtl,表示左内边距
* paddingHorizontal:水平方向上的内边距
* paddingLeft:左内边距
* paddingRight: 右内边距
* paddingStart: 如果布局为ltr,表示左内边距,如果为rtl,表示右内边距
* paddingTop: 顶部内边距
* paddingVertical: 垂直方向上的内边距

### 阴影样式

* shadowColor: 阴影颜色
* shadowOffset: 阴影偏移
* shadowOpacity: 阴影透明度
* shadowRadius: 阴影圆角半径

### Transforms形变样式

* rotation:旋转角度
* scaleX: x方向缩放比率
* scaleY: y方向缩放比率
* transform: 形变简写
* translateX: x方向偏移
* translateY: y方向偏移

### 文本相关
* color: 文字颜色
* fontFamily:字体家族
* fontSize:字体大小
* fontStyle:字体样式
* fontWeight:字体粗细
* lineHeight:行高
* textAlign:文字对齐方式
* textAlignVerticalAndroid:
* textShadowColor:文字阴影颜色
* textShadowOffset: 文字阴影偏移量
* textDecorationLine: 文件装饰线,如下划线,中划线,上划线
* textShadowRadius: 文字阴影圆角半径
* includeFontPadding
* textAlignVertical: 文字垂直方向上对齐方式
* fontVariant:
* letterSpacing: 字符之间的间隔
* textDecorationColor:装饰线的颜色
* textDecorationStyle: 装饰线的样式
* textTransform: 文字形变
* writingDirection:文字书写方向

### 布局属性
* display: 布局方式,none和flex
* width: 组件的宽度
* minWidth: 最小宽度
* maxWidth: 最大宽度
* height: 组件的高度
* minHeight: 最小高度
* maxHeight: 最大高度
* position: 位置,relative:相对与在父元素中的位置,absolute:绝对位置,以屏幕为比较对象
* top: 距离父元素的顶部距离
* bottom: 距离父元素的底部距离
* left: 距离父元素的左边距离
* right: 距离父元素的右边距离
* start:如果布局为ltr,和left相等,如果布局为rtl,则为right
* overflow: 溢出,组件内容溢出的处理方式
* zIndex: 在z轴上面的index.如果多个元素覆盖了同一个位置,index越大,在z轴上显示在前面.
* direction: 设置了用户界面的阅读顺序. ltr:从左往右,rtl:从右往左
* aspectRatio: 宽高比

### Flex弹性布局属性

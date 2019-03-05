# Text: 文本显示组件

在Text组件中可以在嵌套Text组件,但是被嵌套的文字会继承外面的Text的字体样式.在iOS中还支持嵌套视图(andriod不支持)

## Text的属性

* selectable: 决定用户是否可以长按选择文本,以便复制和粘贴.
* ellipsizeMode: 当Text组件无法全部显示需要显示的字符串时如何用省略号进行修饰.  
head - 从文本内容头部截取显示省略号,"...efg".  
middle - 在文本内容中间截取显示省略号,"ab...yz".  
tail - 从文本内容尾部截取显示省略号,"abcd...".  
clip - 不显示省略号,直接从尾部截断.
* numberOfLines:文字的行数
* onLayout: 布局完成后的回调
* onLongPress: 长按回调
* onPress: 点击回调
* style: [文本样式](./Style.md)
* pressRetentionOffset: [参考](./Touchable系列.md)
* allowFontScaling: 控制字体是否要根据系统的字体大小辅助选项来进行缩放.默认值为true.
* disabled: andriod可用,用于测试
* selectionColor: andriod可用,高亮是的文字颜色
* adjustsFontSizeToFit: 自动缩放文字字体的大小来适应text组件的大小
* minimumFontScale: 最小字体缩放比率
* suppressHighlighting:设为true时,当文本被按下会没有任何视觉效果.默认情况下,文本被按下时会有一个灰色的椭圆形的高光.

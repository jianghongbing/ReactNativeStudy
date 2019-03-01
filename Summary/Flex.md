# Flex:弹性布局

在React Native中使用flexbox规则来指定某个组件的子元素的布局,Flexbox可以在不同屏幕尺寸上提供一致的布局结构.flex在react native中的使用方式也基本和在CSS中的使用方式一致

## Flex相关的属性和含义

### display: 设置组件的显示类型.可用于元素的显示和隐藏.
* none: 隐藏
* flex: 默认值,默认是弹性布局

### felx: 在父组件中主轴方向上,所占的大小

在React Native中flex的表现和CSS有些区别,flex在RN中只能为整数值.当flex为一个正整数时,组件尺寸会具有弹性,并根据具体的flex值来按比例分配.

* 当flex大于0时,两个组件在同一个父容器中,一个flex为2,另一个flex为1,则两者的尺寸比为2:1.
* 当flex等于0时,组件尺寸由width和height决定,此时不再具有弹性.
* 当flex等于-1时,组件尺寸一般还是由width和height决定,但是当空间不够时,组件尺寸会收缩到minWidth和minHeight所设定的值.

### flexDirection: 子元素排列方向,主轴的方向.

* row: 子元素水平排列
* row-reverse: 子元素水平排列,从父元素的水平结尾处开始排列
* column: 子元素垂直排列
* columnReverse: 子元素垂直排列,从底部开始排列

###

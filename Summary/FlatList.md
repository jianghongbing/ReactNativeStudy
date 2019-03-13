# FlatList: 列表组件


## 属性, FlatList继承了ScrollView和VirtualizedList的属性

* data: 数据源,数组类型.如果需要使用其他特殊数据结构,例如immutable数组,请直接使用更底层的VirtualizedList组件
* renderItem: 从data中挨个取出数据并渲染到列表中,是一个函数,该函数返回一个item组件,渲染到列表上. renderItem的使用方式如下

```JavaScript
// renderItem({ item: Object, index: number, separators: { highlight: Function, unhighlight: Function, updateProps: Function(select: string, newProps: Object) } }) => ?React.Element
//renderItem函数接受一个参数,该参数是一个对象,该对象的键值对如下
// item: data中的一个元素
// index: item在data数组中的索引
//separators: 分割线,一个对象.键值如下
// highlight: 高亮时的分割线,一个函数,返回一个组件.
// unhighlight: 没有高亮时的分割线,一个函数,返回一个组件
// updateProps:
```

* ItemSeparatorComponent: 行与行之间的分隔线组件,不会出现在第一行之前和最后一行之后.
* ListEmptyComponent: 列表数据为空时渲染该组件,将该组件添加到FlatList组件上
* ListHeaderComponent: 列表头部组件
* ListFooterComponent: 列表尾部组件
* keyExtractor: 此函数用于为给定的item生成一个不重复的key,Key 的作用是使React能够区分同类元素的不同个体,以便在刷新时能够确定其变化的位置,减少重新渲染的开销.该函数接受两个参数,一个是对应位置的item,一个item的index.
* refreshing: 是否正在刷新,如该值为true,列表的上方会出现一个加载的标准控件
* onRefresh: 当列表滚动到最顶端,还继续往下拉的时候会触发该方法
* initialNumToRender: 列表初始渲染item的数量,最好刚刚够填满一个屏幕,这样保证了用最短的时间给用户呈现可见的内容.注意这第一批次渲染的元素不会在滑动过程中被卸载,这样是为了保证用户执行返回顶部的操作时,不需要重新渲染首批元素.
* initialScrollIndex: 一开始就滚到指定位置的元素,而不是第一个元素. 如果设置了这个属性,则第一批initialNumToRender范围内的元素不会再保留在内存里,而是直接立刻渲染位于 initialScrollIndex位置的元素.需要先设置getItemLayout属性.
* horizontal: 是否水平布局
* columnWrapperStyle: 如果设置了多列布局,则可以额外指定此样式作用在每行容器上.
* extraData
* getItemLayout: 设置item的位置,是一个可选的优化,用于避免动态测量内容尺寸的开销,不过前提是你可以提前知道内容的高度.如果你的行高是固定的,getItemLayout用起来就既高效又简单.
* numColumns: 多列布局只能在非水平模式下使用,即必须是horizontal={false}.此时组件内元素会从左到右从上到下按Z字形排列,类似启用了flexWrap的布局.组件内元素必须是等高的——暂时还无法支持瀑布流布局.
* onEndReached: 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用.
* onEndReachedThreshold: 决定当距离内容最底部还有多远时触发onEndReached回调.注意此参数是一个比值而非像素单位.比如,0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发.
* removeClippedSubviews: 是否移除不在屏幕内的item,对于大列表启用本属性可能可以提高性能.
* inverted: 翻转滚动方向. 当为true时,列表里面的视图都反向显示,但是item里面的元素显示方向不变.比如头部显示在底下,第一个item显示在列表的下面
* progressViewOffset: 在指定的偏移出显示加载指示器的位置.安卓可用
* onViewableItemsChanged: 在可见行元素变化时调用.可见范围和变化频率等参数的配置请设置viewabilityConfig属性.

## 方法

* scrollToEnd: 滚动到列表的底部
* scrollToIndex: 滚动到指定的位置
* scrollToItem: 滚动到指定的item
* scrollToOffset: 滚动到指定偏移的位置
* recordInteraction: 主动通知列表发生了一个事件,以使列表重新计算可视区域.
* flashScrollIndicators: 短暂的显示滚动指示器

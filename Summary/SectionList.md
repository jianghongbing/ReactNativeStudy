# SectionList: 分组列表.

可以将列表分为多个组,可以为每个组设置单独的header和footer.如果不需要分组,使用FlatList

## 属性

* sections: 数据源
  * 数据源的格式必须符合以下要求
    * 数据源是一个类数组对象
    * 数据源中的每一个条目,也是一个对象,称之为section.表示一个组,section对象里面的属性说明
      * data: 必须要填,数组对象,和FlatList中的数据一样,表示该组所有的item.
      * 自定义属性:一些自己的数据,非必选
      * renderItem: 渲染组中的item,会覆盖表的renderItem方法,可以根据组的不同,返回不同的item
      * ItemSeparatorComponent: item之间的分割线组件,会覆盖表的ItemSeparatorComponent方法
      * keyExtractor: 为组中的item生成key,会覆盖表的keyExtractor方法
* renderItem: 渲染item.一个函数,返回一个组件.
  * renderItem函数的参数是一个对象,比FlatList多了一个section,该对象里面各个key的说明如下
    * section: item所在的组的数据
    * item: 当前item的数据
    * index: item所在section中data的数据的索引
    * separators: 分割对象,里面三个属性,值都是函数,hightlight,unhignlight, updateProps
* renderSectionHeader: 渲染分组的头部.一个函数,接受一个对象,该对象里面包含一个section字段的属性,该属性的值就是对应数据源中的每一组的数据.
* renderSectionFooter: 渲染分组的尾部.一个函数,返回一个组件,作为section的尾部,该函数接受的参数和renderSectionHeader一致
* SectionSeparatorComponent: 在每个section的顶和底部渲染,ItemSeparatorComponent是在每个item之间渲染
* stickySectionHeadersEnabled: 是否固定分组的头部,默认为true.仅iOS可用
* initialNumToRender: 渲染item的初始数量
* keyExtractor: 为每个item生成一个独一无二的key,和FlatList中一致
* onEndReached: 滚动到底部的回调
* extraData:参考FlatList
* ItemSeparatorComponent: 分割线
* inverted: 翻转ListView中的元素.例如ListHeader会显示在下面,index靠后的item显示在上面
* ListHeaderComponent: 表的头部组件
* ListFooterComponent: 表的尾部组件
* ListEmptyComponent: 表没有数据时的组件
* onEndReachedThreshold: 决定当距离内容最底部还有多远时触发onEndReached回调
* onRefresh: 刷新的回调
* refreshing: 是否正在刷新

## 方法

* scrollToLocation: 将可视区内位于特定sectionIndex或itemIndex(section内)位置的列表项,滚动到可视区的制定位置.
* recordInteraction: 主动通知列表发生了一个事件,以使列表重新计算可视区域
* flashScrollIndicators: 短暂的显示滚动指示器

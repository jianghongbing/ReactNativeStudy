# Picker: 选择器

## 属性

* style: 设置样式
* enabled: 是否可用
* itemStyle: 选项文字的颜色
* onValueChange: 值发生改变时的回调
* selectedValue: 选中的值
* mode:仅安卓可用,在Android上,可以指定在用户点击选择器时,以怎样的形式呈现选项
  * dialog: 显示一个模态对话框.默认选项.
  * dropdown: 以选择器所在位置为锚点展开一个下拉框.
* propmt: 设置选择器的提示字符串,在Android的对话框模式中用作对话框的标题.

## Picker.Item: 选择器的选项

* label: 选项标签,用于显示在Picker中该选项的文字
* value: 该选项的值

## PickerIOS: 仅iOS可用,和Picker的使用方式一致

* itemStyle: 选项文字的颜色
* onValueChange: 值发生改变时的回调
* selectedValue: 选中的值

## Picker.itemIOS:在PickerIOS上的选项

* label: 选项标签,用于显示在Picker中该选项的文字
* value: 该选项的值

## DatePickerIOS: 时间选择器,仅iOS可用

* date: 被选中的时间
* mode: 时间选择器的样式
  * date: 年,月,日
  * time: 时,分,上下午
  * dateTime: 日,时,分,上下午
* minimumDate: 可选的最小日期
* maximumDate: 可选的最大日期
* minuteInterval: 分钟的间隔
* locale: 区域,本地化picker选择器
* timeZoneOffsetInMinutes: 时区差,单位是分钟
* onDateChange: 当选择的日期发生改变时的回调

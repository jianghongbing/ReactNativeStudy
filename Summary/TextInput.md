# TextInput: 文本输入组件

TextInput是一个允许用户在应用中通过键盘输入文本的基本组件.TextInput的常见的用法就是监听onChangeText事件来读取用户的输入,在通过setState方法来设置value的值.而在TextInput标签中,就将state的value赋值给TextInput的value属性

## TextInput的属性和方法

### 属性

* value: TextInput的值
* style: 设置input的样式,border相关的样式不支持
* editable: 是否可编辑
* multiline: 是否可输入多行,默认为false
* numberOfLines: 设置输入框的行数,可输入的最大行数,仅安卓可用
* placeholder: 占位符,当没有输入文字的时候,显示占位符
* placeholderTextColor: 占位符文字颜色
* maxLength: 输入最大长度
* scrollEnabled: 是否可以滚动,在multiLine为true的时候才有效
* secureTextEntry: 安全文字输入.适用于密码输入
* keyboardType: 键盘类型
  * default:默认值
  * number-pad: 数字键盘
  * decimal-pad: 带有小数点的数字键盘
  * numeric:
  * email-address: 电子邮件键盘
  * phone-pad: 电话号码键盘
  * ascii-capable: 字母键盘 iOS可用
  * numbers-and-punctuation: 数据和符号键盘 iOS可用
  * url: url键盘 iOS可用
  * name-phone-pad: 姓名电话键盘 iOS可用
  * twitter: iOS可用
  * web-search: iOS可用
  * visible-password: 安卓可用
* returnKeyType: 回车键类型,在安卓上还可以使用returnKeyLabel
  * done
  * go
  * next
  * search
  * send
  * none: 安卓可用
  * previous: 安卓可用
  * default: iOS可用
  * emergency-call: iOS可用
  * google: iOS可用
  * join: iOS可用
  * route: iOS可用
  * yahoo: iOS可用
* selectTextOnFocus: 当获得焦点时,选中所有文字
* allowFontScaling: 控制字体是否要根据系统的字体大小辅助选项来进行缩放. 默认值为true.
* autoCapitalize: 控制TextInput是否要自动将特定字符切换为大写.
  * characters: 所有的字符.
  * words: 每个单词的第一个字符.
  * sentences: 每句话的第一个字符,默认值.
  * none: 不切换.
* autoComplete: 自动补全
* autoCorrect: 是否启用拼写自动修正,如果为false,会关闭拼写自动修正.默认值是true.
* autoFocus: 是否获得焦点,如果为true,在componentDidMount后会获得焦点.默认值为false.
* blurOnSubmit: 是否在提交的时候失去焦点,对于单行输入框默认值为true，多行则为false.
* caretHidden: 是否隐藏光标
* clearButtonMode: 是否要在文本框右侧显示“清除”按钮.仅在单行模式下可用.适用于iOS
  * never: 不显示
  * while-editing: 编辑的时候出现.
  * unless-editing: 停止编辑(失去焦点)的时候出现.
  * always: 一直显示.
* clearTextOnFocus: 是否每次开始编辑的时候清除文字,默认为false
* contextMenuHidden: 是否隐藏contextMenu
* dataDetectorTypes: 识别数据类型,设置text input内能被转化为可点击URL的数据的类型.当且仅当multiline={true}和editable={false}时起作用.默认情况下不检测任何数据类型.可接受一个类型值或类型值数组.仅适用于iOS
  * phoneNumber: 检测电话号码
  * link: 检测链接
  * address: 检测地址
  * calendarEvent: 日期事件
  * none: 不检测
  * all: 检测所有的类型
* defaultValue: 默认值,设置后可以修改
* enablesReturnKeyAutomatically: 如果为true,键盘会在文本框内没有文字的时候禁用确认按钮.默认值为false.
* inlineImageLeft: 指定一个图片放置在左侧.仅适用于安卓
* inlineImagePadding: 给左边的图片设置padding样式
* keyboardAppearance: 键盘样式,仅适用于iOS
* selection: 选中文字的范围
* selectionColor: 选中时高亮颜色
* selectionState: 控制被选中的状态
* spellCheck: 拼写检查,如果设置为false,则禁用拼写检查的样式(比如错误拼写的单词下的红线).默认值继承自autoCorrect.
* textContentType: 文字内容类型,iOS可用
* textBreakStrategy: 文字断行策略,安卓可用
* underlineColorAndroid: 文字下滑线的颜色,仅安卓可用

### 事件

* onBlur: 失去焦点时的回调
* onChange: 当文本框内容变化时调用此回调函数
* onChangeText: 当文本框内容变化时调用此回调函数,改变后的文字内容会作为参数传递.
* onContentSizeChange: 内容size发生改变时的回调
* onEndEditing: 结束编辑时的回调
* onFocus: 获得焦点时的回调
* onKeyPress: 按键按下时的回调
* onLayout: 布局变化时的回调
* onScroll: 滚动时的回调
* onSelectionChange: 长按选择文本时，选择范围变化时调用此函数
* onSubmitEditing: 当点击了软键盘上的回车按钮时的回调

## 方法

* clear: 清空输入框的内容
* isFocus: 是否获得焦点

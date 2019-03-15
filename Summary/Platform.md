# Platform: 获取系统平台信息

在编写跨平台的应用时,我们肯定希望尽可能多地复用代码,但是总有些时候我们会碰到针对不同平台编写不同代码的需求.React Native使用Platform检测当前运行平台,如果组件只有一小部分代码需要依据平台定制,那么这个模块就可以派上用场.

## 属性

* OS: 系统名称.OS的值,ios:苹果手机系统, andriod: 安卓手机系统
* Version: 系统版本
* isTV: 是否为tv系统
* isTesting: 是否在测试环境
* isTVOS: 是否为苹果TV系统,仅iOS可用
* isPad: 是否为平板电脑,仅iOS可用

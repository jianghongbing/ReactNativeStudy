# AppState: 程序状态

获取app的当前状态和监听app状态的变化.

## AppState type

* active: 程序正在前台运行
* background: 程序在后台运行
* inactive: 不活跃状态,一般从当前app切换到另外一个app,或者有电话打来时,如果app在不活跃状态时间过长,app就会进入background状态

## 属性和方法

 * currentState: app的当前状态
 * addEventListener: 监听app的状态变化并做出相应, type参数使用change.
 * removeEventListener: 移除监听状态

# NetInfo: 获取当前设备的联网状态

## 方法和属性

* getConnectionInfo: 获取当前网络状态信息,返回一个Promise对象,该Promise对象的第一个then方法接收一个带有type和effectiveType属性的对象.
* addEventListener: 添加一个事件监听函数,事件类型一般为网络变化事件
* removeEventListener: 移除之前添加的网络变化事件监听
* isConnected: 以异步方式获取一个布尔值,用于判断当前设备是否联网.
* isConnectionExpensive: 仅Android可用,用于判断当前活动的连接是否计费.如果当前连接是通过移动数据网络,或者通过基于移动数据网络所创建的wifi热点,或是大量消耗电池等等.都有可能被判定为计费的数据连接.

## ConnectionType: 网络连接状态类型

* none: 没有联网
* wifi: 设备通过wifi联网,或者设备是iOS模拟器
* cellular: 设备通过蜂窝数据流量联网
* unknown: 网络状态未知
* bluetooth: 设备通过蓝牙协议联网,仅安卓可用
* ethernet: 设备通过以太网协议联网,仅安卓可用
* wimax: 设备通过WiMAX协议联网,仅安卓可用

## EffectiveConnectionType: 蜂窝网络类型

* 2g: 2g网
* 3g: 3g网
* 4g: 4g网
* unknown: 未知
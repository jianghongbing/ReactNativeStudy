# AsyncStorage: 简单的,异步的,持久化的Key-Value存储系统.它对于App来说是全局性的

在iOS中AsyncStorage的数据以文件的形式存放在程序沙盒中的Documents目录中.在Android上,AsyncStorage会尝试使用RocksDB,或退而选择SQLite的方式来存储数据.

## 方法

* setItem: 保存数据,返回一个Promise对象.setItem接受三个参数,参数如下
  * key: 存放数据的key,字符串
  * value: 存放的数据,字符串,如果为对象,先讲其序列化成字符串
  * callback: 保存数据的回调,如果保存失败,接受一个error参数
* getItem: 获取数据,返回一个Promise对象.接收两个参数,
  * key: 数据的key
  * callback:获取数据的回调
* removeItem: 移除指定key的数据,参数参考getItem
* mergeItem: 合并指定key的数据,将旧数据和新数据合并,如果有相同的属性,则更新属性的值,如果有不同的属性,则将该属性添加到之前的数据中
* clear: 清除所有数据
* getAllKeys: 获取所有保存的数据的key
* flushGetRequests: 清除所有相关的查询操作
* multiGet: 通过获取多个item数据
* multiSet: 同时设置多个item的数据
* multiRemove: 同时移除多个item的数据
* multiMerge: 通过合并多个item的数据

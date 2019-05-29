# Geolocation: 获取设备的地理位置

react-native中Geolocation的api遵循web标准, 因此可以在rn中, Geolocation的API和在浏览器上使用方法一致, 直接访问全局的navigator.geolocation对象, 并不需要额外import. 不管是在iOS或者安卓系统中都需要配置访问地理位置的权限.

## Geolocation API

1. requestAuthorization: 请求用户开启访问位置的权限
2. setRNConfiguration: 设置RN配置, 在所有的访问位置位置请求时, 都使用该配置
3. getCurrentPosition: 获取当前的位置信息, 该函数接受三个参数, 说明如下
    * geo_success: 函数类型, 获取位置信息成功时的回调, 该函数接受一个Position实例对象
    * geo_error: 函数类型, 获取位置信息失败的回调, 该函数接受一个PositionError的实例对象
    * options: 对象类型, 获取位置事, 所带的选项. 该选项可以有三个值. timeout: 发送位置请求超时时间, 默认为无限大; maximumAge: 缓存位置信息时间, 默认为无限大, 如果为0, 则表示总是获取最新的位置, 如果为无限大, 则永远返回缓存的那个位置; enableHighAccuracy: 是否使用GPS定位, true表示使用GPS定位, false表示使用wifi定位.
4. watchPosition: 实时监听位置的变化, 返回一个watchId, 该函数接受三个参数, 说明如下
    * geo_success: 同getCurrentLocation的geo_success
    * geo_error: 同getCurrentLocation的geo_error
    * options: 对象类型, 获取位置事, 所带的选项. 该选项可以有5个值, 前三个和getCurrentPosition的options相同. distanceFilter: 单位米, 当位置距离之前位置的距离超过该值时, 返回新的位置, 否则使用之前的位置, 默认为100米; useSignificantChanges: 是否采用实际的位置名称发生改变时才返回当前位置的方式, 该种方式比较节省电量, 默认为false. 
5. clearWatch: 移除之前对位置变化的实时监听.
6. stopObserving: 停止对位置变化的观察, 会移除所有通过watchPosition方法来对位置的监听的监听者.


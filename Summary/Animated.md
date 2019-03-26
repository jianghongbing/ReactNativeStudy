# Animated: 可动画的

为组件添加动画效果,默认情况下,组件一般是不产生动画的,组件必须经过特殊处理才能用于动画.主要是指把动画值绑定到属性上,并且在一帧帧执行动画时避免 react 重新渲染和重新调和的开销.此外还得在组件卸载时做一些清理工作，使得这些组件在使用时是安全的.Animated中默认导出了以下这些可以直接使用的动画组件Animated.View, Animated.Text, Animated.Image, Animated.ScrollView.用于也可以依据自己的需要来自定义可动画的组件.

## 使用动画的方式

* 创建动画属性的值
* 将动画属性的值绑定到可动画组件的style上面去
* 创建和配置动画
* 执行动画

```JavaScript

//1.创建动画属性的原始值
this.state = {animatedValue: new Animated.Value(1)};
//2.绑定动画属性原始值到可动画组件上
<Animated.View style={backgroundColor: 'red', width: 100, height: 100, opacity: this.state.animatedValue}/>
//3.创建可配置动画
const fadeAnimation = Animated.timing(this.state.animatedValue, {
  duration: 1000,
  toValue: 0,
});
fadeAnimation.start();

```

## Animated的属性和方法

### <h3 id='animationProperty'>创建动画属性值</h3>

react-native提供了两种方式来创建动画属性值,Value()和ValueXY().其中
Value()方法返回的值,Animated.Value()可以绑定到样式或是其他属性上,也可以进行插值运算.单个Animated.Value()可以用在任意多个属性上.

* Value(): 创建动画属性值,只支持单个value. 如x, y,opacity.
* ValueXY(): 创建动画属性值,支持同时设置组件的x, y.

### 创建动画

react-native提供3种方式来创建动画.

#### timing: 创建一个timing动画

按照某种缓动曲线方式执行动画.timing函数接收两个参数,[动画属性值对象](#h3-idanimationpropertyh3)和一个动画配置对象

```javascript
const animation = Animated.timing(animatedProperty, animationConfig);
```

#### timing动画配置对象

* toValue: 动画属性值的目的值
* duration: 动画的持续时间
* easing: 缓动函数,默认为Easing.inOut(Easing.ease).
* delay: 开始动画前的延迟时间(毫秒).默认为0.
* isInteraction: 指定本动画是否在InteractionManager的队列中注册以影响其任务调度. 默认值为true.
* useNativeDriver: 启用原生动画驱动.默认不启用(false).

### decay: 衰退动画

推动一个值以一个初始的速度和一个衰减系数逐渐变为0.decay函数也接受两个参数[动画属性值对象](#h3-idanimationpropertyh3)和一个动画配置对象

#### decay动画配置对象

* toValue: 动画属性值的目的值
* velocity: 初始速度
* deceleration: 衰减系数。
* isInteraction: 指定本动画是否在InteractionManager的队列中注册以影响其任务调度,默认值为 true.
* useNativeDriver: 启用原生动画驱动,默认不启用(false).

### spring: 弹簧效果动画

以类似于弹簧效果的方式来执行动画,spring函数接受两个参数[动画属性值对象](#h3-idanimationpropertyh3)和一个动画配置对象

#### spring动画配置对象

* friction: 摩擦系数,默认为7.
* tension: 张力系数,默认为40.
* speed: 控制动画的速度,默认为12.
* bounciness: 反弹系数,默认为8.
* stiffness: 弹簧硬度系数
* damping: 阻尼系数
* mass: 质量
* delay: 延迟毫秒数
* isInteraction: 指定本动画是否在InteractionManager的队列中注册以影响其任务调度,默认值为 true.
* useNativeDriver: 启用原生动画驱动,默认不启用(false).

## 动画值之间计算

* add: 将两个动画值相加计算,得出一个新的动画值.
* subtract: 将两个动画值相减计算,得出一个新的动画值.
* divide: 将两个动画值相除计算,得出一个新的动画值.
* modulo: 将两个动画值做取模(取余数)计算,得出一个新的动画值.
* diffClamp: 

## 其他

* delay: 在指定的延迟之后开始动画
* sequence: 按顺序执行一个动画数组里的动画,等待一个完成后再执行下一个.如果当前的动画被中止,后面的动画则不会继续执行.
* parallel: 同时开始一个动画数组里的全部动画.默认情况下,如果有任何一个动画停止了,其余的也会被停止.你可以通过stopTogether选项来改变这个效果.
* stagger: 一个动画数组,里面的动画有可能会同时执行(重叠).
* loop: 无限循环一个指定的动画,从头到尾周而复始
* event:
* forkEvent:
* unforkEvent:
* start:开始动画
* stop:结束动画
* interpolation: 将输入值范围转换为输出值范围.
* createAnimatedComponent: 封装任意React组件,使其可以动画化
* attachNativeEvent: 附加原生事件



 
 


 

  





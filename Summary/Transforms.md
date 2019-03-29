# Transforms: 形变

transform样式是一个数组对象,数组中是一些含有可行变属性的对象,每个对象中只能有一个可发生形变的属性

```javascript
const styles = StyleSheet.create({
  view: {
    transform: [{rotateX: '45deg'}, {translateX: 100}],
  },
});
```

## 可发生形变的属性

* rotate: 旋转,字符串类型,可使用角度或弧度值,角度的单位deg,弧度单位rad
* rotateX: 在x轴方向上旋转
* rotateY: 在y轴方向上旋转
* rotateZ: 在z轴方向上旋转
* scale: 缩放,数值类型
* scaleX: 宽度缩放
* scaleY: 高度缩放
* translateX: 在x轴上平移
* translateY: 在y轴上平移
* skew: 斜交,类型同rotate
* skewX: 在x轴方向上的斜交
* skewY: 在y轴方向上的斜交
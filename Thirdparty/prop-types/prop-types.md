# PropTypes: 对组件的属性进行类型检查

React提供了内置的类型检查功能. 要检查组件的属性,需要配置组件的静态propTypes属性,可以在组件类中添加,也可以在组件类外部添加.这是通过React中的prop-types库来实现的.当你给属性传递了无效值时,JavScript控制台将会打印警告,出于性能原因,propTypes只在开发模式下进行检查.

```javascript

//导入Proptypes
import PropTypes from 'prop-types'

class MyComponent extends Component {
  //声明static属性 propTypes,作用等同于下面的MyComponent.proptypes
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  }
}


// MyComponent.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
// }

```

## PropsTypes支持检测的类型

* number: 基本数字类型. eg: `age: PropTypes.number`
* array: 数组类型. eg: `list: PropTypes.array`
* string: 字符串类型. eg: 'name: PropTypes.string'
* bool: 布尔类型. eg: `isLoading: PropTypes.bool`
* func: 函数类型. eg: `clickHandler: PropTypes.func`
* object: 对象类型. eg: `param: PropTypes.object`
* symbol: symbol类型. eg: `id: PropTypes.symbol`
* element: react组件类型. eg: `ele: PropTypes.element`
* node: 任何可被渲染的元素类型. eg: `node: PropTypes.node`
* instanceOf: 通过instance来指定类型. eg: `item: PropTypes.instanceOf(MyItem)`
* 限定特定值, eg:`color: PropTypes.oneOf(['red', 'green', 'blue'])
* 限定某些类型其中的一个. eg: `type: PropTypes.onOfType([PropTypes.number, PropType.string]`
* 限定一个指定类型的数组. eg: `names: PropTypes.arrayOf(PropTypes.number)`
* 限定一个指定类型的对象. eg: `object: PropTypes.objectOf(PropTypes.number)`
* 指定属性及其类型的对象. eg: `shape: PropTypes.shape({color: PropTypes.string,fontSize: PropTypes.number})`
* isRequire:可以在任何PropTypes属性后面加上`isRequired`后缀,这样如果这个属性父组件没有提供时,会打印警告信息. eg: `id: PropTypes.string.isRequired`.
* 自定义属性类型,可以参考下面的代码块,摘自React官方文档

```javascript

import PropTypes from 'prop-types';

MyComponent.propTypes = {
  // 你可以将属性声明为以下 JS 原生类型
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,

  // 任何可被渲染的元素（包括数字、字符串、子元素或数组）。
  optionalNode: PropTypes.node,

  // 一个 React 元素
  optionalElement: PropTypes.element,

  // 你也可以声明属性为某个类的实例，这里使用 JS 的
  // instanceof 操作符实现。
  optionalMessage: PropTypes.instanceOf(Message),

  // 你也可以限制你的属性值是某个特定值之一
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // 限制它为列举类型之一的对象
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ]),

  // 一个指定元素类型的数组
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // 一个指定类型的对象
  optionalObjectOf: PropTypes.objectOf(PropTypes.number),

  // 一个指定属性及其类型的对象
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),

  // 你也可以在任何 PropTypes 属性后面加上 `isRequired` 
  // 后缀，这样如果这个属性父组件没有提供时，会打印警告信息
  requiredFunc: PropTypes.func.isRequired,

  // 任意类型的数据
  requiredAny: PropTypes.any.isRequired,

  // 你也可以指定一个自定义验证器。它应该在验证失败时返回
  // 一个 Error 对象而不是 `console.warn` 或抛出异常。
  // 不过在 `oneOfType` 中它不起作用。
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  },

  // 不过你可以提供一个自定义的 `arrayOf` 或 `objectOf` 
  // 验证器，它应该在验证失败时返回一个 Error 对象。 它被用
  // 于验证数组或对象的每个值。验证器前两个参数的第一个是数组
  // 或对象本身，第二个是它们对应的键。
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/matchme/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
};
```

## 限定单个子代: 使用PropTypes.element,可以指定只传递一个子代.

```javascript

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
};

```

## 属性默认值: 可以通过配置defaultProps为组件的props定义默认值.

defaultProps用来确保props里面对应属性的值在父组件没有特别指定的情况下,默认为该值.类型检查发生在defaultProps赋值之后,所以类型检查也会应用在 defaultProps上.

```javascript

class Greeting extends React.Component {
  //static defaultProps = {
    //name: 'stranger'
  //}

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

Greeting.defaultProps = {
  name: 'unknown',
}

```






# Alert: 提示框

React Native提供了3中形式的提示框,分别是Alert, AlertIOS, ActionSheetIOS,其中Alert可用于iOS和安卓,后面两个只能用于iOS

## Alert

启动一个提示对话框,包含对应的标题和信息.
* 在iOS上你可以指定任意数量的按钮.每个按钮还都可以指定自己的样式.此外还可以指定提示的类别.
* 在Android上最多能指定三个按钮,这三个按钮分别具有"中间态","消极态"和"积极态"的概念.如果你只指定一个按钮,则它具有"积极态"的属性;两个按钮,则分别是"消极态"和"积极态",三个按钮则意味着"中间态","消极态"和"积极态".默认情况下点击提示框的外面会自动取消提示框.可以提供一个额外参数来处理这一事件`{onDismiss: () =>{} }`.还有另外一个参数也可以用来阻止提示框被自动取消,即`{cancelable: false}`.

### Alert只用一个静态方法

* alert: 弹出提示框

### alert方法的用法
```JavaScript
//第一个参数表示提示框的标题
//第二个参数表示提示框的信息
//第三个参数是一个数组,表示提示框所提供的选项,如果为空,则默认提供一个确定选项,数组里面放置一组对象,每个对象表示一个动作,有标题,执行该动作的回调以及该动作的类型
//第四个参数一般用于安卓系统,可以添加额外的参数,比如,点击alert对话框外部,对话框消失的回调或防止点击alert对话框外部,对话框消失
Alert.alert('title', 'message', [
  {text: '选项一', onPress:()=>{}},
  {text: '选项二', onPress:()=>{}, style:'cancel'}
], {cancelable: false});
```

## AlertIOS

相对于Alert,AlertIOS可以在对象框添加输入框

### AlertIOS的方法

* alert:和Alert的使用方法基本一直,使用如下

```JavaScript
AlertIOS.alert('title', 'message', [
  {text: '选项一', onPress:()=>{}},
  {text: '选项二', onPress:()=>{}, style:'cancel'}
]);

//当只有一个默认的确定按钮时,只传一个回调即可
AlertIOS.AlertIOS.alert('title', 'message',()=>{
  console.log('点击了ok');
});

```

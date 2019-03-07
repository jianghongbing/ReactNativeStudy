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
//style用于定义action的样式
AlertIOS.alert('title', 'message', [
  {text: '选项一', onPress:()=>{}},
  {text: '选项二', onPress:()=>{}, style:'cancel'}
]);

//当只有一个默认的确定按钮时,只传一个回调即可
AlertIOS.alert('title', 'message',()=>{
  console.log('点击了ok');
});
```
* prompt: 带有输入框的alert,React Native中只能添加一个文本输入框,在原生的iOS中,可以添加多个文本输入框,使用如下

```JavaScript
AlertIOS.alert('title', 'message', [
  {text: '选项一', onPress:()=>{}},
  {text: '选项二', onPress:()=>{}, style:'cancel'}],
  'plain-text', '123456', 'number-pad');
/**
prompt方法的参数说明,前三个参数和alert的参数说明一致
第4个参数AlertType表示文本输入的形式,有3个值,'plain-text':一般性文本, 'secure-text': 安全性文本,'login-password':登录密码文本
第五个参数defautlValue: 给文本输入框一个默认值
第六个参数keyboardType: 文本输入框的键盘类型
*/
```
## ActionSheetIOS: 从屏幕底部弹出选项框

### ActionSheetIOS的方法

* showActionSheetWithOptions(options, callback): 从屏幕底部弹出一个style为actionSheet的UIAlertViewController.使用如下:

```JavaScript
ActionSheetIOS.showActionSheetWithOptions({
  options:['iPhone', 'iPad', 'Mac', 'Watch', 'Cancel'],
  destructiveButtonIndex: 3,
  cancelButtonIndex: 4,
  title: 'Apple',
  message: '请选择产品',
  tintColor: 'blue',
}, (buttonIndex)=>{
  this.alert(`点击了选项${buttonIndex}`);
})

/**
options: 一个对象,里面的key的值如下:
options: 表示该actionSheet的选项
destructiveButtonIndex: 破坏性的选项,一般该选项的文字被标记为红色
cancelButtonIndex: 取消按钮的选项在所有选项中的位置
title:actionSheet的标题
message: actionSheet的提示信息
tintColor: 选项文字的颜色

callback: 点击某个选项后的回调.该回调接受一个参数,该参数为被点击的选项在所有选项中的位置
*/

```

* showShareActionSheetWithOptions(options, failureCallback, successCallback): 从底部弹出一个分享菜单(在iOS中为NSActivityViewController),该方法使用如下

```JavaScript
ActionSheetIOS.showShareActionSheetWithOptions(
  {url:'https://www.apple.com', message:'iPhone', subject:'iPhone xs'},
  (error)=>{
    console.log(error);
    this.alert('分享失败');
  },
  (success, text)=>{
    this.alert(`分享成功: ${success},${text}`);
  })

/**
该方法的参数说明
options: 分享的选项,为一个对象.对象里面key的值如下
url: 需要分享的url,该url可以是一个本地的图片的url,文件的url,或者是网页
message: 分享的相关信息
subject: 要分享的信息主题
excludedActivityTypes: 指定在NSActivityViewController中不显示的活动

failureCallback: 分享失败的回调,接收一个错误对象作为参数
successCallback: 分享成功的回调,接受2个参数,表示成功与否的布尔值与成功的话返回一个表示分享方式的字符串
*/
```

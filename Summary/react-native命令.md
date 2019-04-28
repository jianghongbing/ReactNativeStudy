# react-native常用命令

当通过npm安装react-native的命令行工具react-native-cli后,在终端就可以通过react-native命令行做某些操作

* version: 查看当前项目中,使用的react-native版本. `react-native --version` 或 `react-native -v`
* help: 帮助命令
* init: 在当前文件中创建一个新的react-native工程,默认使用最新的React Native的版本.
  * `react-native init projectName`,使用最新版本的React Native来创建一个新的项目
  * `react-native init --version 0.58.5 projectName`,创建指定版本的React Native工程
* run-ios: `react-native run-ios` 运行iOS模拟器
* run-android: 'react-native run-android' 运行安卓模拟器
* simulator: 在指定的模拟器上运行项目 `react-native run-ios --simulator 'iPhone X'`.
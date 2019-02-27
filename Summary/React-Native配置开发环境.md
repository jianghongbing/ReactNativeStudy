# React Native开发环境

## 配置开发环境

1. macOS环境
  1.1 安装node,macOS一般自带了node,如果没有安装,可以通过homebrew来安装
brew install node
  1.2 安装watchman
brew install watch man
  1.3 安装 react-native工具
npm install -g react-native-cli

2. windows环境(待定)

3. 安装xcode(只支持macOS)和android studio编辑器以及模拟器

## 创建react-native项目以及运行

开发环境配置好后,可以通过react-native工具来创建项目

* 通过 react-native init MyProject来创建名为MyProject的项目
* 进入项目文件夹,通过react-native run-ios来运行iOS工程,通过react-native run-android来运行android工程

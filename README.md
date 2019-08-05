# Z-Components —— 一个基于vue的UI组件  

[![Build Status](https://travis-ci.org/ajing741472797/z-components.svg?branch=master)](https://travis-ci.org/ajing741472797/z-components)


## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式
    使用本框架前，请在CSS中开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box}
    ```

    你还需要设置默认颜色等变量（后续会改为SCSS变量）
    ```
    html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg:white;
        --button-active-bg: #eee;
        --color:#333;
        --border-radius:4px;
        --border-color:#999;
        --border-color-hover:#666
    }
    ```

    IE 15 及以上浏览器都支持此样式。

2. 安装
    ```
    npm i --save z-gulu
    ```

3. 引入 gulu
    ```
    import {Button, ButtonGroup, Icon} from 'z-gulu'
    import 'z-gulu/dist/index.css'

    export default {
    name: 'app',
    components: {
        'z-button': Button,
        'z-icon': Icon
      }
    }
    ```
 


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


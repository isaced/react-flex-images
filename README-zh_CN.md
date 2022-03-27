# react-flex-images [![npm](https://img.shields.io/npm/v/react-flex-images.svg?style=flat-square)](https://www.npmjs.com/package/react-flex-images)

一个轻量级的封装实现类似 Pixabay/Flickr/Google Images 的横向瀑布流（画廊）布局，基于 [Pixabay/JavaScript-flexImages](https://github.com/Pixabay/JavaScript-flexImages) 开发。

[English](./README.md) | 简体中文

## ✨ 特性 

- 轻量级：4.8 kB JavaScript - gzipped 不到 1.8 kB 
- 支持任意大小图像
- 响应式
- 通过 CSS 控制的图像之间的相等边距
- 不会裁剪或重排序
- 支持 AJAX 比如实现无限加载
- 支持自定义控制布局 （如最大行数、是否现实不完整的最后一行）

## 📃 示例

![Preview](https://user-images.githubusercontent.com/2088605/159846905-eddb7ef8-b710-4ca5-bd06-0c373cb510fe.png)

在 [CodeSandbox](https://codesandbox.io/s/react-flex-images-example-c26qfu) 上实时预览


## 📦 安装 

```bash
$ npm install react-flex-images
```

## 🔨 使用 

```jsx
import { FlexImagesContainer, FlexImagesItem } from "react-flex-images";

const App = () => (
  <>
    <FlexImagesContainer rowHeight={300} maxRows={20} truncate>
        <FlexImagesItem imgUrl="..." imgWidth={...} imgHeight={...} />
        <FlexImagesItem imgUrl="..." imgWidth={...} imgHeight={...} />
        ...
    </FlexImagesContainer>
  </>
);
```

## 设置

| 属性  	     | 默认值 	   | 描述                                                                             	|
|-----------	|---------	|----------------------------------------------------------------------------------	|
| rowHeight 	| 300     	| 最大行高                                                                          	|
| maxRows   	| null    	| 最大行数，超出隐藏 	                                                                 |
| truncate  	| false   	| 如果最后一行未填满，是否隐藏                                                           	|

# react-flex-images [![npm](https://img.shields.io/npm/v/react-flex-images.svg?style=flat-square)](https://www.npmjs.com/package/react-flex-images)

A lightweight react wrapper for creating fluid galleries as seen on Flickr and Google Images, based on [Pixabay/JavaScript-flexImages](https://github.com/Pixabay/JavaScript-flexImages).

English | [简体中文](./README-zh_CN.md)

## ✨ Features 

- Lightweight: 4.8 kB of JavaScript - less than 1.8 kB gzipped
- Source images/objects can have any size
- Responsive
- Equal margins between images controlled via CSS
- No cropping or reordering
- AJAX ready, e.g. for infinite scrolling
- Layout options to control e.g. the maximum number of rows - or whether or not to display an incomplete (last) row.

## 📃 Example

![Preview](https://user-images.githubusercontent.com/2088605/159846905-eddb7ef8-b710-4ca5-bd06-0c373cb510fe.png)

Live preview on [CodeSandbox](https://codesandbox.io/s/react-flex-images-example-c26qfu).


## 📦 Install 

```bash
$ npm install react-flex-images
```

## 🔨 Usage 

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

## Settings

| Property  	| Default 	| Description                                                                      	|
|-----------	|---------	|----------------------------------------------------------------------------------	|
| rowHeight 	| 300     	| Maximum height of a row.                                                         	|
| maxRows   	| null    	| Maximum number of rows to display. Images/Objects exceeding this row are hidden. 	|
| truncate  	| false   	| Hide incomplete last row of images/objects.                                      	|

# react-flex-images [![npm](https://img.shields.io/npm/v/react-flex-images.svg?style=flat-square)](https://www.npmjs.com/package/react-flex-images)

A lightweight react wrapper for creating fluid galleries as seen on Flickr and Google Images, based on [Pixabay/JavaScript-flexImages](https://github.com/Pixabay/JavaScript-flexImages).

## ✨ Features 

- Source images/objects can have any size
- Responsive
- Equal margins between images controlled via CSS
- No cropping or reordering
- AJAX ready, e.g. for infinite scrolling
- Layout options to control e.g. the maximum number of rows - or whether or not to display an incomplete (last) row.

## 📦 Install 

```bash
$ npm install react-flex-images
```

## 🔨 Usage 

```jsx
import { FlexImagesContainer, FlexImagesItem } from "react-flex-images";

const App = () => (
  <>
    <FlexImagesContainer>
        <FlexImagesItem imgUrl="..." />
        <FlexImagesItem imgUrl="..." />
        ...
    </FlexImagesContainer>
  </>
);
```

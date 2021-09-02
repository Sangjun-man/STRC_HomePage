import ReactDOM from "react-dom";
import React from "react";
import Gallery from "../components/Gallery";
import LeftLine from "../components/LeftLine";
import imgSrcArr from "../asset/images/gallery";

const imgSrcArr1 = imgSrcArr.slice(0, 6);
const imgSrcArr2 = imgSrcArr.slice(6, 12);
console.log(imgSrcArr1, imgSrcArr2);

ReactDOM.render(
  <LeftLine position="relative" />,
  document.getElementById("gallery-left-line")
);

ReactDOM.render(
  <Gallery imgSrcArr={imgSrcArr1} start={Number(0)} />,
  document.getElementById("gallery-photo1")
);

ReactDOM.render(
  <Gallery imgSrcArr={imgSrcArr2} start={Number(6)} />,
  document.getElementById("gallery-photo2")
);

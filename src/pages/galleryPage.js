import ReactDOM from "react-dom";
import React from "react";
import GalleryWeb from "../components/GalleryWeb";
import GalleryMobile from "../components/GalleryMobile";
import LeftLine from "../components/LeftLine";
import imgSrcArr from "../asset/images/gallery";

ReactDOM.render(
  <LeftLine position="relative" />,
  document.getElementById("gallery-left-line")
);

ReactDOM.render(
  <GalleryWeb imgSrcArr={imgSrcArr} />,
  document.getElementById("gallery-photo-web")
);

ReactDOM.render(
  <GalleryMobile imgSrcArr={imgSrcArr} />,
  document.getElementById("gallery-photo-mobile")
);

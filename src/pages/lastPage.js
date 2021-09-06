import ReactDOM from "react-dom";
import React from "react";
import Footer from "../components/Footer";
import LeftLine from "../components/LeftLine";
import Links from "../components/Links";
import ContactTypo from "../components/ContactTypo";

ReactDOM.render(
  <LeftLine foot={"contact"} width={1} />,
  document.getElementById("left-line")
);
ReactDOM.render(<Footer />, document.getElementById("footer"));
ReactDOM.render(<Links />, document.getElementById("links"));

if (window.innerWidth < 786) {
  ReactDOM.render(
    <ContactTypo num={1} />,
    document.getElementById("lastP-contact-typo1")
  );
  ReactDOM.render(
    <ContactTypo num={2} />,
    document.getElementById("lastP-contact-typo2")
  );
}

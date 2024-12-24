import React from "react";
import ReactDOM from "react-dom/client";

// React.creteElement => ReactElement-JS Object => when we render the element onto the DOM then it becomes HTMLElement

const heading = React.createElement("h1", { id: "heading" }, "React Learning");
console.log(heading);

//JSX - is not HTML in JS
//JSX - is HTML-like or XML-like syntax
const jsxHeading = <h1 className="head">React Learning using JSX</h1>;
console.log(jsxHeading);
//JSX (transpiled before it reaches the JS Engine) - parcel - Babel(package)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS object => HTMLElement(render)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

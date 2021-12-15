import React from "react";
import ReactDom from "react-dom";
import App from "./App";

console.log(`App→${App}`);

ReactDom.render(<App/>, document.getElementById('root'));
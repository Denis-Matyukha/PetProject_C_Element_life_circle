import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import './index.css';

console.log(`App→${App}`);

ReactDom.render(React.createElement(App), document.getElementById('root'));
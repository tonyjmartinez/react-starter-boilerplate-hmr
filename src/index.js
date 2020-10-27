import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/core";

import "./index.css";

const render = (Component) =>
  ReactDOM.render(
    <ChakraProvider resetCSS={false}>
      <Component />
    </ChakraProvider>,
    document.getElementById("root")
  );

render(hot(App));

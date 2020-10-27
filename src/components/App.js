import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";

import Loading from "./Loading";
import { Button } from "@chakra-ui/core";
import "focus-visible/dist/focus-visible";

const App = () => {
  return (
    <div style={{ margin: "5em" }}>
      <Button size="lg">Click me</Button>
    </div>
  );
};

export default App;

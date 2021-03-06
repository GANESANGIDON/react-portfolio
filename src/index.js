import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider} from "@chakra-ui/react";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

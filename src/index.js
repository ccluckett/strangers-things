import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom"

const domNode = document.getElementById("root");
const root = createRoot(domNode);


root.render(<BrowserRouter><Main /></BrowserRouter>);

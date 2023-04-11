import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/main";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Main />);

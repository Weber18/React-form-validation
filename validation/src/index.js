import React from "react";
import ReactDOM from "react-dom/client";
import FormComponent from "./Components/form-component";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<FormComponent />);
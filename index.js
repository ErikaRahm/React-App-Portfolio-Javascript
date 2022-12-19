import helloworld from "../React-App-Portfolio-Javascript";

const ImageDisplay = () => {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}
    >
        <img src={helloworld} alt="axolotl saying hello" height={600} width={450}/>
    </div>    
    );
};

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


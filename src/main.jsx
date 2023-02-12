import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import GetBackground from "./components/cuerpo/background";

import { createTheme, NextUIProvider, Text } from "@nextui-org/react"


// 2. Call `createTheme` and pass your custom values
const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primaryLight: '$green200',
      blue: '$blue100',
      pink: '$pink500',
      purple: 'hsl(331, 100%, 50%)',
      gradient: 'linear-gradient(90deg, rgba(0,75,255,1) 15%, rgba(90,176,255,1) 100%);'
    }
  }
})


ReactDOM.createRoot(document.getElementById("root")).render(

  <NextUIProvider der theme={darkTheme}>
    {/*     <div className="div-pruebas">
      
    </div> */}
    <GetBackground />
    <App />
    
  </NextUIProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createTheme, NextUIProvider,Text } from "@nextui-org/react"


// 2. Call `createTheme` and pass your custom values
const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors:{
      primaryLight: '$green200',
      blue: '$blue100',
      pink : '$pink500',
      purple: 'hsl(331, 100%, 50%)',
    }
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
<NextUIProvider theme={darkTheme}>
  <div className="div-pruebas">

  </div>
  <App/>
</NextUIProvider>
);

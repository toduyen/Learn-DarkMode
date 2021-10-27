import React from "react";
import { ThemeProvider } from "styled-components";
import {LightTheme , DarkTheme} from './Theme/Theme';
import {Global} from './Global/Global';
import {TextChange} from './Components/TextChange'
import { useDarkMode } from "./Components/DarkMode";
function App() {
  const [Theme , setTheme] = useDarkMode();
  return <div>
     <ThemeProvider theme={Theme === "light" ? LightTheme : DarkTheme}>
        <Global />
        <button onClick={setTheme}>Toggle Theme</button>
        <TextChange>Dark Mode</TextChange>
      </ThemeProvider>
  </div>;
}

export default App;

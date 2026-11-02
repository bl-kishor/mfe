import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const theme = createTheme();

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/pricing" Component={Pricing} />
            <Route path="/" Component={Landing} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

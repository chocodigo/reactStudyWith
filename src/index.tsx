import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";
import { Stack } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Stack sx={{ flexDirection: "row" }}>
      <Menu />
      <App />
    </Stack>
  </BrowserRouter>
);

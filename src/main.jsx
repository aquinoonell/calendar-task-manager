import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  // Place the theme for Mantine here
  //fontFamily: "Open Sans, sans-serif",
  //primaryColor: "cyan",
});

function demo() {
  <MantineProvider theme={theme}>
    <App />;
  </MantineProvider>;
}

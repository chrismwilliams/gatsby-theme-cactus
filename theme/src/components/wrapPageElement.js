import React from "react";
import { ThemeProvider } from "theme-ui";

import theme from "../gatsby-plugin-theme-ui";

const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default wrapPageElement;

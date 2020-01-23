import React from "react";
import { ThemeProvider } from "theme-ui";

import theme from "./src/gatsby-plugin-theme-ui/index";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export default wrapPageElement;

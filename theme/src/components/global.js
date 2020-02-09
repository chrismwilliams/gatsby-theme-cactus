import React from "react";
import { Global } from "@emotion/core";

export default function Global() {
  return (
    <Global
      styles={theme => ({
        "*": {
          boxSizing: `border-box`,
        },
        "html, #___gatsby, #gatsby-focus-wrapper": {
          margin: 0,
          padding: 0,
          height: "100%",
        },
        html: {
          borderTop: `2px solid ${theme.colors.text}`,
        },
      })}
    />
  );
}

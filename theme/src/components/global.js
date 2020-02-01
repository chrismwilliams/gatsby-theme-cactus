import React from "react";
import { Global as EmotionGlobal } from "@emotion/core";

export default function Global() {
  return (
    <EmotionGlobal
      styles={theme => ({
        "*": {
          boxSizing: `border-box`
        },
        "html, #___gatsby, #gatsby-focus-wrapper": {
          margin: 0,
          padding: 0,
          height: "100%"
        },
        html: {
          borderTop: `2px solid ${theme.colors.text}`
        }
      })}
    />
  );
}

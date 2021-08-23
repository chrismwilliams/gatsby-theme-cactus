import React from "react";
import { Global as EmotionGlobal } from "@emotion/react";

export default function Global() {
  return (
    <EmotionGlobal
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
        body: {
          margin: "0px auto",
          lineHeight: 1.725,
          fontWeight: 400,
          maxWidth: "48rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          height: "100%",
          fontSize: "14px",
        },
        pre: {
          overflow: 'auto'
        }
      })}
    />
  );
}

/* Override this file completely by shadowing it.
  Or override certain details by merging this exported default with your custom settings
  https://theme-ui.com/packages/gatsby-plugin
 */

import tailwind from "@theme-ui/preset-tailwind";
import colors from "./colors";

export default {
  ...tailwind,
  initialColorMode: `dark`,
  colors,
  fonts: {
    ...tailwind.fonts,
    body: `"Menlo", monospace`
  },
  lineHeights: {
    body: `1.725`
  },
  styles: {
    ...tailwind.styles,
    root: {
      ...tailwind.styles.root,
      mx: `auto`,
      py: 0,
      px: 4,
      height: "100%",
      maxWidth: `48rem`
    },
    ul: {
      margin: 0,
      padding: 0,
      li: {
        listStyleType: `none`
      }
    },
    p: {
      hyphens: `auto`
    }
  },
  layout: {
    pageWrapper: {
      position: `relative`,
      py: [5],
      display: `flex`,
      flexDirection: `column`,
      minHeight: `100%`,
      overflowWrap: `break-word`,
      textRendering: `geometricPrecision`,
      fontSmooth: `grayscale`,
      MozOsxFontSmoothing: `grayscale`,
      WebkitFontSmoothing: `antialiased`
    },
    header: {
      margin: `0 auto 2rem`,
      width: `100%`,
      display: `grid`,
      gridTemplateColumns: `50px auto`,
      gridTemplateRows: `repeat(2,1fr)`,
      gridColumnGap: [3],
      gridRowGap: [1],
      ":hover": {
        ".logo": {
          svg: {
            filter: `none`
          }
        }
      },
      ".logo": {
        gridRow: `span 2`,
        width: 50,
        height: 50,
        svg: {
          width: `100%`,
          height: `100%`,
          filter: `grayscale(100%)`
        }
      },
      nav: {
        gridColumn: 2,
        alignSelf: `start`,
        lineHeight: `15px`,
        letterSpacing: `0.01em`,
        fontSize: `0.8rem`,
        fontWeight: `200`,
        fontStyle: `normal`,
        span: {
          display: `inline-block`,
          marginRight: [3],
          borderRight: `1px dotted`,
          borderRightColor: `primary`,
          ":last-of-type": {
            borderRight: 0
          }
        },
        a: {
          marginRight: [3],
          color: `primary`,
          textDecoration: `none`
        }
      },
      h1: {
        margin: 0,
        padding: 0,
        letterSpacing: `0.01em`,
        fontWeight: 700,
        fontStyle: `normal`,
        fontSize: `1.5rem`,
        lineHeight: `2rem`
      },
      li: {
        display: `inline-block`
      }
    },
    main: {
      a: {
        color: `text`,
        textDecoration: `none`
      }
    },
    footer: {
      position: `absolute`,
      bottom: 0,
      width: `100%`,
      marginBottom: [3],
      display: [`flex`],
      flexDirection: [`column`, `row`],
      justifyContent: [`center`, `space-between`],
      alignItems: `center`,
      color: `tertiary`,
      verticalAlign: `top`,
      textAlign: `center`,
      fontSize: `11px`,
      div: {
        marginRight: [0, 3]
      },
      nav: {
        display: `flex`,
        span: {
          display: `inline-block`,
          marginRight: [3],
          borderRight: `1px solid`,
          borderColor: `tertiary`,
          verticalAlign: `middle`,
          ":last-of-type": {
            marginRight: 0,
            borderRight: 0,
            a: {
              marginRight: 0
            }
          },
          a: {
            marginRight: [3],
            color: `tertiary`,
            textDecoration: `underline`,
            ":hover": {
              color: `#858585`
            }
          }
        }
      }
    }
  },
  links: {
    secondary: {
      color: `text`,
      textDecoration: `none`,
      display: `inline-block`
    },
    social: {
      ":hover": {
        color: `secondary`
      }
    }
  },
  title: {
    color: `primary`,
    marginTop: [5],
    marginBottom: [3],
    letterSpacing: `0.01em`
  }
};

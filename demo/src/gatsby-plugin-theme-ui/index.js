// Example of overriding & merging base (gatsby-theme-cactus) styles with your own
import baseTheme from "gatsby-theme-cactus/src/gatsby-plugin-theme-ui";
import dracula from "@theme-ui/prism/presets/dracula.json";

// merge custom values with the blog theme's defaults
export default {
  ...baseTheme,
  styles: {
    ...baseTheme.styles,
    code: {
      ...dracula
    },
    p: {
      textAlign: `justify`,
      code: {
        ...dracula
      },
      a: {
        ":hover": {
          textDecoration: `none`
        }
      }
    }
  },
  layout: {
    ...baseTheme.layout,
    blogHeader: {
      position: `fixed`,
      top: `2rem`,
      right: 0,
      pr: [2, 5],
      display: `grid`,
      gridTemplateColumns: `repeat(2,1fr)`,
      gridTemplateRows: `repeat(2,1fr)`,
      alignItems: `flex-start`,
      zIndex: 999,
      nav: {
        gridColumn: `1 / -1`,
        gridRow: `1 / -1`,
        display: `flex`,
        flexDirection: `column`,
        ".page-links": {
          pt: `0.25rem`,
          pr: 3,
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
        ".blog-links": {
          mt: 4,
          display: [`none`, `initial`],
          alignSelf: `flex-end`,
          a: {
            mx: `0.75rem`,
            color: `accent`,
            ":hover": {
              color: `secondary`
            }
          },
          "[data-tooltip]": {
            position: `relative`,
            "::after": {
              opacity: 0,
              visibility: `hidden`,
              position: `absolute`,
              content: `attr(data-tooltip)`,
              top: `1.5em`,
              left: `50%`,
              transform: `translateX(-50%) translateY(-2px)`,
              fontStyle: `italic`,
              color: `text`,
              whiteSpace: `nowrap`,
              zIndex: 999,
              transition: `opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1)`
            },
            ":hover": {
              "::after": {
                display: `block`,
                opacity: 1,
                visibility: `visible`,
                transform: `translateX(-50%) translateY(0)`
              }
            }
          }
        }
      },
      ".bg-menu": {
        gridColumn: 2,
        gridRow: 1,
        justifySelf: `end`,
        background: `none`,
        outline: `none`,
        color: `accent`,
        border: 0,
        ":hover": {
          cursor: `pointer`
        }
      }
    },
    post: {
      ".meta": {
        display: `flex`,
        flexDirection: [`column`, `row`],
        alignItems: [`flex-start`, `center`],
        span: {
          mx: 2,
          display: [`none`, `initial`]
        },
        ".tags": {
          display: `flex`,
          alignItems: `center`,
          ul: {
            ml: 2,
            display: `flex`,
            flexWrap: `wrap`,
            li: {
              mr: 2
            }
          }
        }
      },
      ".md-body": {
        mt: 4,
        h2: {
          mt: 5,
          mb: 2,
          position: `relative`,
          color: `accent`,
          fontSize: 1,
          "::before": {
            position: `absolute`,
            top: -2,
            left: `-1.2rem`,
            color: `primary`,
            content: `"#"`,
            fontWeight: `bold`,
            fontSize: 3
          }
        },
        pre: {
          my: 4,
          px: 3,
          py: 2,
          borderRadius: 3
        },
        blockquote: {
          my: 0,
          mx: 2,
          py: 2,
          px: 3,
          width: `50%`,
          textAlign: `left`,
          color: `secondary`,
          fontWeight: `bold`,
          quotes: `"\\201C" "\\201D" "\\2018" "\\2019"`,
          "::before": {
            verticalAlign: `-0.4em`,
            lineHeight: `0.1em`,
            content: `"\\201C"`,
            fontSize: 3
          },
          p: {
            m: 0
          }
        }
      }
    }
  }
};

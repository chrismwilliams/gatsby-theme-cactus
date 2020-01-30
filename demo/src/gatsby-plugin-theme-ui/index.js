// Example of overriding & merging base (gatsby-theme-cactus) styles with your own
import merge from "lodash.merge";
import cactusTheme from "gatsby-theme-cactus/src/gatsby-plugin-theme-ui";
import dracula from "@theme-ui/prism/presets/dracula.json";

// lodash.merge will deeply merge custom values with the blog theme's defaults
export default merge({}, cactusTheme, {
  styles: {
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
});

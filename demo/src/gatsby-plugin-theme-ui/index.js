// Example of overriding & merging base (gatsby-theme-cactus) styles with your own
import { merge } from "theme-ui";
import baseTheme from "@chrismwilliams/gatsby-theme-cactus/src/gatsby-plugin-theme-ui";
import dracula from "@theme-ui/prism/presets/dracula.json";

// merge custom values with the blog theme's defaults
export default merge(baseTheme, {
  styles: {
    code: {
      ...dracula,
    },
    p: {
      textAlign: `justify`,
      code: {
        ...dracula,
      },
      a: {
        ":hover": {
          textDecoration: `none`,
        },
      },
    },
  },
  layout: {
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
          display: `flex`,
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
              borderRight: 0,
            },
          },
          a: {
            marginRight: [3],
            color: `primary`,
            textDecoration: `none`,
          },
        },
        ".blog-links": {
          mt: 4,
          position: `relative`,
          display: [`none`, `block`],
          alignSelf: `flex-end`,
          a: {
            mx: `0.75rem`,
            display: `inline-block`,
            color: `accent`,
            ":hover": {
              color: `secondary`,
            },
          },
          "[data-tooltip]": {
            "::before": {
              content: `attr(data-tooltip)`,
              position: `absolute`,
              top: 0,
              right: 0,
              opacity: 0,
              mr: 5,
              visibility: `hidden`,
              textAlign: `right`,
              transform: `translateX(-50%) translateY(-2px)`,
              fontStyle: `italic`,
              color: `text`,
              whiteSpace: `nowrap`,
              zIndex: 999,
              transition: `opacity 0.2s cubic-bezier(0.64, 0.09, 0.08, 1)`,
            },
            ":hover": {
              "::before": {
                display: `block`,
                opacity: 1,
                visibility: `visible`,
                transform: `translateX(-50%) translateY(0)`,
              },
            },
          },
        },
      },
      ".toc": {
        mt: 3,
        maxWidth: `15rem`,
        maxHeight: `calc(95vh - 7rem)`,
        display: [`none`, `none`, `none`, `none`, `block`],
        ul: {
          m: 0,
          p: 0,
          textAlign: `right`,
          fontSize: `0.8rem`,
          listStyleType: `none`,
          li: {
            mb: 2,
            "::before": {
              mr: 1,
              color: `primary`,
              content: '"#"',
            },
            a: {
              color: `accent`,
              textDecoration: `none`,
              ":hover": {
                color: `secondary`,
              },
            },
          },
        },
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
          cursor: `pointer`,
        },
      },
    },
    post: {
      ".meta": {
        display: `flex`,
        flexDirection: [`column`, `row`],
        alignItems: [`flex-start`, `center`],
        span: {
          mx: 2,
          display: [`none`, `initial`],
        },
        ".tags": {
          display: `flex`,
          alignItems: `center`,
          ul: {
            ml: 2,
            display: `flex`,
            flexWrap: `wrap`,
            li: {
              mr: 2,
            },
          },
        },
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
            fontSize: 3,
          },
        },
        pre: {
          my: 4,
          px: 3,
          py: 2,
          borderRadius: 3,
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
            fontSize: 3,
          },
          p: {
            m: 0,
          },
        },
      },
    },
  },
});

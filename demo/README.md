<p align="center">
  <img alt="Gatsby Theme Cactus logo" src="https://res.cloudinary.com/dqzlshiwt/image/upload/v1581006740/web/gatsby-theme-cactus.png" width="70" />
</p>
<h1 align="center">
  Gatsby Theme Cactus Demo
</h1>

<p align="center">
  <img src="https://api.netlify.com/api/v1/badges/4286b856-1018-4fb4-ab5a-860ff700f4de/deploy-status" alt="Netlify Deploy Status">
</p>

[Demo](https://gatsby-theme-cactus.netlify.com/) of this example hosted on Netlify

A simple Gatsby theme inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

## Features

- GatsbyJS - for blazingly fast static websites built with React
- Theme UI - themeable design system for modern styling
- MDX - markdown evolved
- Lazy loading - for images and inc webp support
- Font Awesome icons
- Responsive design
- Light & dark mode - uses `prefers-color-scheme` media query

Demo includes:

- Prism code syntax styling
- Google analytics
- Auto-generated sitemap
- Offline support

## Getting Started

This is a demo site showcasing how to use Gatsby Theme Cactus. Unsure what a Gatsby theme is or how to use them, the [Gatsby docs](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) are a great place to start, including [how to use a theme](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme).

You can also view the source of Gatsby Theme Cactus [here](https://github.com/chrismwilliams/gatsby-theme-cactus/tree/master/theme).

### Config

Add your own meta data to `gatsby-config.js`. The following settings are sourced by `gatsby-theme-cactus/src/components/seo` to provide page SEO.

```js
// Gatsby Theme Cactus defaults are shown here
module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Cactus`,
    description: `Gatsby Theme Cactus`,
    siteUrl: `https://gatsby.org`,
    author: `Chris Williams`,
    lang: `en`,
    social: [{ name: `GitHub`, url: `https://github.com/chrismwilliams` }],
  },
  // ...plugins
};
```

### Content

You can change both/either the posts path and assets path, as detailed in the example `gatsby-config.js` file below.

```js
module.exports = {
  // ...siteMetadata
  plugins: [
    {
      resolve: `@chrismwilliams/gatsby-theme-cactus`,
      options: {
        /*
          This theme passes all options to its base theme gatsby-theme-blog-core
          - basePath: defaults to '/'
          - contentPath: defaults to 'content/posts'
          - assetPath: defaults to 'content/assets'
        */
      },
    },
    // ...other plugin's
  ],
};
```

_Blog_

Any `.mdx` or `.md` files added to the `./content/posts` folder will be transformed into blog pages and added to your site.

_Assets_

Any images for pages or blogs live in `./content/assets`

### Shadowing

_Styles_

Adding your own styles is as easy as following the example shown in folder - `./src/gatsby-plugin-theme-ui`. With the shadowed `index.js` file, you'll find a composition of both theme and demo styles. Note that Gatsby Theme Cactus uses the `prefers-color-scheme` media query to set either the default dark or light mode depending on user preference. To change this, again simply shadow `index.js` with the property `useColorSchemeMediaQuery` and set it to false. To shadow/replace just the colours or colour modes, just add a `colors.js` file in this shadowed folder with the same properties.

```js
// @chrismwilliams/gatsby-theme-cactus/src/gatsby-plugin-theme-ui/colors.js
// default is a dark theme
export default {
  text: `#c9cacc`,
  accent: `#eeeeee`,
  background: `#1d1f21`,
  primary: `#2bbc8a`,
  secondary: `#A953C6`,
  tertiary: `#666`,
  modes: {
    dark: {
      text: `#c9cacc`,
      accent: `#eeeeee`,
      background: `#1d1f21`,
      primary: `#2bbc8a`,
    },
    light: {
      text: `#363533`,
      accent: `#111111`,
      background: `#e2e0de`,
      primary: `#d44375`,
    },
  },
};
```

This demo uses a Prism code style, edit `./src/gatsby-plugin-theme-ui/components.js` with your chosen Prism styling, options can be found [here](https://theme-ui.com/packages/prism).

_Gatsby Theme Cactus_

You can shadow any theme component you wish. Following the example in `./src/@chrismwilliams/gatsby-theme-cactus/components/` you can see the demo has a contrived `layout.js` component that shadows/overwrites the one from the theme.

### Analytics

Add your google analytics ID to an `.env` file with the key `GOOGLE_ANALYTICS_ID` and place it at the root of your site folder (here it is `demo`).

## Licence

MIT

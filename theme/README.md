<p align="center">
  <img alt="Gatsby Theme Cactus logo" src="../demo/content/assets/logo.png" width="70" />
</p>
<h1 align="center">
  Gatsby Theme Cactus
</h1>

Example [Demo](https://gatsby-theme-cactus.netlify.com/) using this theme, hosted on Netlify

A simple Gatsby theme inspired by [Hexo Theme Cactus](https://github.com/probberechts/hexo-theme-cactus)

## Features

- GatsbyJS - for blazingly fast static websites built with React
- Theme UI - themeable design system for modern styling
- MDX - markdown evolved
- Lazy loading - for images and inc webp support
- Font Awesome icons
- Responsive design
- Light & dark mode - uses `prefers-color-scheme` media query

## Getting Started

Unsure what a Gatsby theme is or how to use them, the [Gatsby docs](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) are a great place to start, including [how to use a theme](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme).

> Want to see an example of how to use it? Check out a demo site [repo](https://github.com/chrismwilliams/gatsby-theme-cactus/tree/master/demo)

### Download

To install this theme, run in the root of your Gatsby site:

```sh
# use npm or yarn
npm install --save @chrismwilliams/gatsby-theme-cactus
```

Then add the theme and any options to `gatsby-config.js`.

This theme is composed with [Gatsby Theme Blog Core](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-theme-blog-core) and passes all options set in `gatsby-config.js`.

```js
module.exports = {
  // ...siteMetadata
  plugins: [
    {
      resolve: `@chrismwilliams/gatsby-theme-cactus`,
      options: {
        /*
          This theme passes all the options to its base theme, gatsby-theme-blog-core
          - basePath: defaults to '/'
          - contentPath: defaults to 'content/posts'
          - assetPath: default to 'content/assets'
          - mdx: default to 'true'
        */
      },
    },
    // ...other plugin's
  ],
};
```

### Content

You can change either the posts path and/or assets path, defaults shown above. You can also disable mdx completely if you so wish.

_Blog_

Any `.mdx` or `.md` files added to the `./content/posts` folder will be transformed into blog pages and added to your site.

To create your own blog page, shadow the file within your site `./src/gatsby-theme-blog-core/components/post.js`

_Assets_

Any images for pages or blogs live in `./content/assets`

### Styles

Note - your own site will take precedence over any theme, that includes any sub-themes another theme uses. You also don't have to dive into another theme's theme to shadow/overwrite files.

Here you have a couple of options:

1. Overwrite all Gatsby Theme Cactus styles. Add `gatsby-plugin-theme-ui/index.js` to your site's `src` folder

2. Extended or overwrite properties by adding `gatsby-plugin-theme-ui/index.js` to your `src` folder and compose theme styles by importing it from `@chrismwilliams/gatsby-theme-cactus/src/gatsby-plugin-theme-ui`. An example can be found [here](https://github.com/chrismwilliams/gatsby-theme-cactus/blob/master/demo/src/gatsby-plugin-theme-ui/index.js)

If you prefer to simply change the colours, you can shadow Gatsby Theme Cactus's colours by adding a `gatsby-plugin-theme-ui/colors.js` in your site's `src` folder with the same properties as Gatsby Theme Cactus, which shown below.

```js
// @chrismwilliams/gatsby-theme-cactus/src/gatsby-plugin-theme-ui/colors.js
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

Note also that Gatsby Theme Cactus uses the `prefers-color-scheme` media query to set either the default dark or light mode depending on user preference. To change this, shadow and change the property found in the `gatsby-plugin-theme-ui/index.js` file

```js
useColorSchemeMediaQuery: true,
```

## Licence

MIT

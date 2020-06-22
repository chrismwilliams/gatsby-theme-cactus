<p align="center">
  <img alt="Gatsby Theme Cactus logo" src="https://res.cloudinary.com/dqzlshiwt/image/upload/v1581006740/web/gatsby-theme-cactus.png" width="70" />
</p>
<h1 align="center">
  Gatsby Theme Cactus
</h1>

[Demo](https://gatsby-theme-cactus.netlify.com/) hosted on Netlify

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

Unsure what a Gatsby theme is or how to use them, the [Gatsby docs](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/) are a great place to start, including [how to use a theme](https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme).

This repo is composed of two folders:

1. Gatsby Theme Cactus source code (`./theme`). 👉 [Docs](./theme/README.md)
2. An example demo site (`./demo`) that uses Gatsby Theme Cactus. 👉 [Docs](./demo/README.md)

### Download

This repo has been setup with Yarn workplaces for development purposes, you don't have to however, and can follow the example shown in the demo.

To install this theme, run in the root of your Gatsby site:

```sh
# use npm or yarn
npm install --save @chrismwilliams/gatsby-theme-cactus
```

Then add the theme and any options to `gatsby-config.js`

### Theme Options

| Key         | Default Value   | Description                             |
| ----------- | --------------- | --------------------------------------- |
| `basePath`  | `/`             | Root url for the theme                  |
| `postsPath` | `content/posts` | Location of posts                       |
| `pagesPath` | `content/pages` | Location of additional pages (optional) |

#### Example usage

```js
module.exports = {
  plugins: [
    {
      resolve: `@chrismwilliams/gatsby-theme-cactus`,
      options: {
        /*
          This theme passes all the options to its base theme, gatsby-theme-blog-core
          - basePath: defaults to '/'
          - contentPath: defaults to 'content/posts'
          - assetPath: default to 'content/assets'
        */
      },
    },
  ],
};
```

To get an idea of how to use the theme, check out the `./demo` folder. Here you can see an example of how to shadow components (including gatsby-theme-cactus & gatsby-plugin-theme-ui), create mdx blog posts and more.

## Licence

MIT

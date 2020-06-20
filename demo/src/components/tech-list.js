/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import { Underline } from "@chrismwilliams/gatsby-theme-cactus/src/components";

function TechItem({ href, linkText, desc }) {
  return (
    <li sx={{ mb: 2 }}>
      <Underline themeColor="text" hoverThemeColor="secondary">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ variant: `links.underline` }}
        >
          {linkText}
        </a>
      </Underline>
      : <p sx={{ display: `inline` }}>{desc}</p>
    </li>
  );
}

export default function Technologies() {
  return (
    <section>
      <span>
        <a
          href="https://github.com/chrismwilliams/gatsby-theme-cactus"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ variant: `links.secondary` }}
        >
          <h2 sx={{ variant: `title` }}>Technologies</h2>
        </a>
      </span>
      <Styled.ul>
        <TechItem
          href="https://www.gatsby.org"
          linkText="Gatsby"
          desc="A blazing fast React framework for building websites & apps"
        />
        <TechItem
          href="https://fontawesome.com"
          linkText="Font Awesome"
          desc="The iconic font and CSS toolkit"
        />
        <TechItem
          href="https://theme-ui.com"
          linkText="Theme UI"
          desc="Themeable design system based on contraint-based design principles"
        />
        <TechItem
          href="https://mdxjs.co"
          linkText="MDX"
          desc="Markdown for the component era"
        />
        <TechItem
          href="https://theme-ui.com/packages/prism"
          linkText="Prism"
          desc="Prism code block styling"
        />
      </Styled.ul>
    </section>
  );
}

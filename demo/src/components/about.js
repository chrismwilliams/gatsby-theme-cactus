/** @jsx jsx */
import { jsx } from "theme-ui";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  SEO,
  Layout,
  ToggleMode,
} from "@chrismwilliams/gatsby-theme-cactus/src/components";

export default function About({ data }) {
  return (
    <Layout>
      <SEO title="About" description="Here's a little bit about myself" />
      <h2 sx={{ mt: 0 }}>About Me</h2>
      <p>
        Hi, I’m a theme for a React framework called{" "}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        . I’m particularly great for a personal web page with a simple blog.
      </p>
      <Img
        fluid={data.aboutImg.childImageSharp.fluid}
        alt="Picture of a cactus"
        sx={{ mx: `auto`, my: [4], maxWidth: 200 }}
      />
      <p>These are my best features</p>
      <ul>
        <li>I am fully responsive</li>
        <li>I support Google Analytics</li>
        <li>I have Font Awesome icons</li>
        <li>
          I change colour modes depending on user system preferences, <br /> or
          by using a toggle <ToggleMode />
        </li>
        <li>I'm truly the most tsundere of plants</li>
      </ul>
      <p>
        Clone or fork{" "}
        <a
          href="https://github.com/chrismwilliams/gatsby-theme-cactus"
          target="_blank"
          rel="noopener noreferrer"
        >
          my <FontAwesomeIcon icon={faGithub} /> repo
        </a>{" "}
        if you like me!
      </p>
    </Layout>
  );
}

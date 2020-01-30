/** @jsx jsx */
import { jsx } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Underline from "./underline";

export default function Intro() {
  return (
    <section>
      <p>
        Hi, I’m a theme for the static generating framework{" "}
        <Underline themeColor="text" hoverThemeColor="secondary">
          <a
            sx={{ variant: `links.underline` }}
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
        </Underline>
        . I’m particularly great for a personal web page with a simple blog. In
        this paragraph, you can provide some information about yourself. Below,
        you’re most recent or highlighted writings and projects are listed.
      </p>
      <p>
        Find me on{" "}
        <a
          sx={{ variant: `links.social` }}
          href="https://github.com/chrismwilliams/gatsby-theme-cactus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        ,{" "}
        <a
          sx={{ variant: `links.social` }}
          href="https://github.com/chrismwilliams/gatsby-theme-cactus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        ,{" "}
        <a
          sx={{ variant: `links.social` }}
          href="https://github.com/chrismwilliams/gatsby-theme-cactus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        ,{" "}
        <a
          sx={{ variant: `links.social` }}
          href="https://github.com/chrismwilliams/gatsby-theme-cactus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>{" "}
        and{" "}
        <a
          sx={{ variant: `links.social` }}
          href="mailto:me@email.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        .
      </p>
    </section>
  );
}

/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Underline } from "@chrismwilliams/gatsby-theme-cactus/src/components";

export default function Intro() {
  const {
    site: {
      siteMetadata: { social },
    },
  } = useStaticQuery(socialLinkQuery);

  return (
    <section>
      <p>
        Hi, I’m a theme for the React static generating framework,{" "}
        <Underline themeColor="text" hoverThemeColor="secondary">
          <a
            sx={{ variant: `links.underline` }}
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>
        </Underline>
        . This demo is an example of how you can use Gatsby Theme Cactus with
        GatsbyJS, to create a personal blog. If you want to know more about how
        I was created, click on one of the social links. Below is a list of blog
        posts created with mdx, and after that a list of technologies I use.
      </p>
      <p>
        Find me on{" "}
        <a
          sx={{ variant: `links.social` }}
          href={social[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        ,{" "}
        <a
          sx={{ variant: `links.social` }}
          href={social[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        ,{" "}
        <a
          sx={{ variant: `links.social` }}
          href={social[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        ,{" "}
        <a
          sx={{ variant: `links.social` }}
          href={social[0].url}
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

const socialLinkQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          name
          url
        }
      }
    }
  }
`;

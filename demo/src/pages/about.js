import { graphql } from "gatsby";

import AboutComponent from "../components/about";

export default AboutComponent;

export const query = graphql`
  query {
    aboutImg: file(name: { eq: "cactus" }) {
      childImageSharp {
        fluid(maxWidth: 280) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

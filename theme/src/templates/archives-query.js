import { graphql } from "gatsby";
import ArchivesComponent from "../components/archives";

export default ArchivesComponent;

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            date
            title
          }
        }
      }
    }
  }
`;

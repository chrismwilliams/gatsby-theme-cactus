import { graphql } from "gatsby";

import { Posts as PostsPage } from "../components";

export default PostsPage;

export const query = graphql`
  query PostsQuery {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            excerpt
            slug
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`;

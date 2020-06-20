import { graphql } from "gatsby";
import { Posts as PostsPage } from "@chrismwilliams/gatsby-theme-cactus/src/components";

export default PostsPage;

export const query = graphql`
  query ArchiveQuery {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "DD MMM YYYY")
            excerpt
            tags
          }
        }
      }
    }
  }
`;

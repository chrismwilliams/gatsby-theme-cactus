import { graphql } from "gatsby";

import { Posts as PostsPage } from "../components";

export default PostsPage;

export const query = graphql`
  query PostsQuery {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "DD MMMM, YYYY")
        }
      }
    }
  }
`;

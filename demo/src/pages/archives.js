import { graphql } from "gatsby";
import PostsPage from "../components/posts";

export default PostsPage;

export const query = graphql`
  query ArchiveQuery {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          slug
          title
          date(formatString: "DD MMM YYYY")
          excerpt
          tags
        }
      }
    }
  }
`;

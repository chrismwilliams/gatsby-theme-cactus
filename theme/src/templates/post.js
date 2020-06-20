import { graphql } from "gatsby";

import { Post as PostPage } from "../components";

export default PostPage;

export const postQuery = graphql`
  query PostQuery($id: String!, $previousId: String, $nextId: String) {
    blogPost: mdx(id: { eq: $id }) {
      id
      tableOfContents
      body
      frontmatter {
        excerpt
        slug
        title
        tags
        date(formatString: "DD MMMM, YYYY")
      }
    }
    previous: mdx(id: { eq: $previousId }) {
      id
      frontmatter {
        slug
        title
      }
    }
    next: mdx(id: { eq: $nextId }) {
      id
      frontmatter {
        slug
        title
      }
    }
  }
`;

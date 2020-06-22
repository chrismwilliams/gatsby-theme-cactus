import { graphql } from "gatsby";

import { Post as PostPage } from "../components";

export default PostPage;

export const postQuery = graphql`
  query PostQuery($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      tableOfContents
      body
      excerpt
      slug
      title
      tags
      date(formatString: "DD MMMM, YYYY")
    }
    previous: blogPost(id: { eq: $previousId }) {
      id
      slug
      title
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      slug
      title
    }
  }
`;

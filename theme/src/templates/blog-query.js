import { graphql } from "gatsby";
import BlogComponent from "../components/blog";

export default BlogComponent;

export const query = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      id
      body
      ...PostMetaFragment
    }
  }
`;

import { graphql } from "gatsby";

export const markdownPostMetaFragment = graphql`
  fragment PostMetaFragment on MarkdownRemark {
    id
    frontmatter {
      path
      date(formatString: "DD MMMM YYYY")
      title
    }
  }
`;

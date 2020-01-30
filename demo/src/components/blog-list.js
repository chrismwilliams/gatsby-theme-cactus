/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import Underline from "./underline";

export default function BlogList() {
  const { allBlogPost } = useStaticQuery(BlogListQuery);

  return (
    <section>
      <Link to="/archives/" sx={{ variant: `links.secondary` }}>
        <h2 sx={{ variant: `title` }}>Writings</h2>
      </Link>
      <Styled.ul>
        {allBlogPost.edges.map(({ node }) => {
          return (
            <li key={node.id} sx={{ mb: 2 }}>
              <time dateTime={node.date} sx={{ mr: 3, color: `tertiary` }}>
                {" "}
                {node.date}
              </time>
              <Underline themeColor="text" hoverThemeColor="secondary">
                <Link to={`${node.slug}/`} sx={{ variant: `links.underline` }}>
                  {node.title}
                </Link>
              </Underline>
            </li>
          );
        })}
      </Styled.ul>
    </section>
  );
}

export const BlogListQuery = graphql`
  query {
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 50) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "DD MMM YYYY")
          tags
        }
      }
    }
  }
`;

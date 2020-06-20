/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

import { Underline } from "@chrismwilliams/gatsby-theme-cactus/src/components";
import formateTime from "@chrismwilliams/gatsby-theme-cactus/utils/format-time";

export default function BlogList() {
  const { allMdx } = useStaticQuery(BlogListQuery);

  return (
    <section>
      <Link to="/archives/" sx={{ variant: `links.secondary` }}>
        <h2 sx={{ variant: `title` }}>Writings</h2>
      </Link>
      <Styled.ul>
        {allMdx.edges.map(({ node }) => {
          return (
            <li key={node.id} sx={{ mb: 2 }}>
              <time
                dateTime={formateTime(node.frontmatter.date)}
                sx={{ mr: 3, color: `tertiary` }}
              >
                {" "}
                {node.frontmatter.date}
              </time>
              <Underline themeColor="text" hoverThemeColor="secondary">
                <Link
                  to={`${node.frontmatter.slug}`}
                  sx={{ variant: `links.underline` }}
                >
                  {node.frontmatter.title}
                </Link>
              </Underline>
            </li>
          );
        })}
      </Styled.ul>
    </section>
  );
}

const BlogListQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: 50
    ) {
      edges {
        node {
          id
          frontmatter {
            excerpt
            slug
            title
            date(formatString: "DD MMM YYYY")
            tags
          }
        }
      }
    }
  }
`;

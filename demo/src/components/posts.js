/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

import SEO from "gatsby-theme-cactus/src/components/seo";
import Layout from "gatsby-theme-cactus/src/components/layout";
import Underline from "./underline";

export default function Posts({ data: { allBlogPost } }) {
  return (
    <Layout>
      <SEO
        title="Archives"
        description="Collection of all my blogs in one place"
      />
      <div className="blog-post">
        <h2 sx={{ mt: 0 }}>Archives</h2>
        <Styled.ul>
          {allBlogPost.edges.map(({ node }) => {
            return (
              <li key={node.id} sx={{ mb: 3 }}>
                <time dateTime={node.date} sx={{ mr: [3], color: `tertiary` }}>
                  {node.date}
                </time>
                <Underline themeColor="text" hoverThemeColor="secondary">
                  <Link to={node.slug} sx={{ variant: `links.underline` }}>
                    {node.title}
                  </Link>
                </Underline>
                <em sx={{ m: 0, display: `block` }}>{node.excerpt}</em>
              </li>
            );
          })}
        </Styled.ul>
      </div>
    </Layout>
  );
}

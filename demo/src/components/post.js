/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import SEO from "gatsby-theme-cactus/src/components/seo";
import Layout from "gatsby-theme-cactus/src/components/layout";

export default function Blog({ data: { post }, location, previous, next }) {
  return (
    <Layout>
      <SEO title={post.title} />
      <div sx={{ variant: `layout.post` }}>
        <h2 sx={{ variant: `title`, m: 0 }}>{post.title}</h2>
        <div className="meta">
          <time dateTime={post.date}>{post.date}</time>
          <span>|</span>
          <div className="tags">
            <FontAwesomeIcon icon={faTag} />
            <Styled.ul>
              {post.tags.map(tag => (
                <li key={tag}>#{tag}</li>
              ))}
            </Styled.ul>
          </div>
        </div>
        <div className="md-body">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

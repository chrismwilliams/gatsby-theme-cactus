/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

import { SEO, Layout, BlogHeader, Underline } from "./";
import formatTime from "../../utils/format-time";

const shortcodes = { Underline };

export default function Blog({ data: { blogPost, previous, next } }) {
  return (
    <Layout
      header={
        <BlogHeader
          previous={previous}
          next={next}
          toc={blogPost.tableOfContents}
        />
      }
    >
      <SEO title={blogPost.title} description={blogPost.excerpt} />
      <div sx={{ variant: `layout.post` }}>
        <h2 sx={{ variant: `title`, m: 0 }}>{blogPost.title}</h2>
        <div className="meta">
          <time dateTime={formatTime(blogPost.date)}>{blogPost.date}</time>
          <span>|</span>
          <div className="tags">
            <FontAwesomeIcon icon={faTag} />
            <Styled.ul>
              {blogPost.tags.map((tag) => (
                <li key={tag}>#{tag}</li>
              ))}
            </Styled.ul>
          </div>
        </div>
        <MDXProvider components={shortcodes}>
          <div className="md-body">
            <MDXRenderer>{blogPost.body}</MDXRenderer>
          </div>
        </MDXProvider>
      </div>
    </Layout>
  );
}

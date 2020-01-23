import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "./layout";
import SEO from "./seo";

export default function Blog({ data: { mdx } }) {
  const { frontmatter } = mdx;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
}

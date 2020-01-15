import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";

export default function BlogTemplate({ data }) {
  const { allMarkdownRemark } = data;

  return (
    <Layout>
      <div className="blog-post">
        <h2>Archives</h2>
        <ul>
          {allMarkdownRemark.edges.map(n => {
            const { path, date, title } = n.node.frontmatter;
            return (
              <li key={path}>
                {date} <Link to={path}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          ...PostMetaFragment
        }
      }
    }
  }
`;

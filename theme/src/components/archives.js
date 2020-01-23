/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";

import Layout from "./layout";
import SEO from "./seo";

export default function Blog({ data: { allMdx } }) {
  return (
    <Layout>
      <SEO
        title="Archives"
        description="Collection of all my blogs in one place"
      />
      <div className="blog-post">
        <h2 sx={{ mt: 0 }}>Archives</h2>
        <Styled.ul>
          {allMdx.edges.map(n => {
            const { path, date, title } = n.node.frontmatter;
            return (
              <li key={path}>
                <time dateTime={date} sx={{ mr: [3], color: `tertiary` }}>
                  {date}
                </time>
                <Link to={path} sx={{ variant: `links.underline` }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </Styled.ul>
      </div>
    </Layout>
  );
}

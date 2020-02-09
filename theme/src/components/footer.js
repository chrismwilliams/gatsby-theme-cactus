/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link, graphql, useStaticQuery } from "gatsby";

export default function Footer() {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(FooterQuery);
  return (
    <footer sx={{ variant: `layout.footer` }}>
      <div>
        Copyright &copy; {new Date().getFullYear()} {author}
      </div>
      <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/about/">About</Link>
        </span>
        <span>
          <Link to="/archives/">Writings</Link>
        </span>
      </nav>
    </footer>
  );
}

const FooterQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;

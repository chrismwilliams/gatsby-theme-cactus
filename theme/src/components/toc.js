/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export default function TableOfContents({ toc }) {
  if (!toc || !toc.items.length) return null;
  return (
    <div className="toc">
      <ul>
        {toc.items.map((item) => (
          <li key={item.url}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** @jsx jsx */
import { useState } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { TOC as TableOfContents } from "./";

function PrimaryLink({ to, linkText }) {
  return (
    <Link
      to={to}
      sx={{
        ":hover": {
          backgroundImage: (theme) => `linear-gradient(
              transparent,
              transparent 5px,
              ${theme.colors.primary} 5px,
              ${theme.colors.primary}
            )`,
          backgroundPosition: `bottom`,
          backgroundSize: `100% 6px`,
          backgroundRepeat: `repeat-x`,
        },
      }}
    >
      {linkText}
    </Link>
  );
}

export default function BlogHeader({ previous, next, toc }) {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible((prevState) => !prevState);
  }

  return (
    <header sx={{ variant: `layout.blogHeader` }}>
      <nav
        sx={{
          variant: `layout.nav`,
          visibility: visible ? `initial` : `hidden`,
        }}
      >
        <div className="page-links">
          <span>
            <PrimaryLink to="/" linkText="Home" />
          </span>
          <span>
            <PrimaryLink to="/about/" linkText="About" />
          </span>
          <span>
            <PrimaryLink to="/archives/" linkText="Writings" />
          </span>
        </div>
        <div className="blog-links">
          {previous && (
            <Link data-tooltip="Previous post" to={previous.slug}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
          )}
          {next && (
            <Link data-tooltip="Next post" to={next.slug}>
              <FontAwesomeIcon icon={faChevronLeft} rotation={180} />
            </Link>
          )}
        </div>
        <TableOfContents toc={toc} />
      </nav>
      <button className="bg-menu" onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
    </header>
  );
}

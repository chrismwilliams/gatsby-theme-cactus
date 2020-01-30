/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

function PrimaryLink({ to, linkText }) {
  return (
    <Link
      to={to}
      sx={{
        ":hover": {
          backgroundImage: theme => `linear-gradient(
              transparent,
              transparent 5px,
              ${theme.colors.primary} 5px,
              ${theme.colors.primary}
            )`,
          backgroundPosition: `bottom`,
          backgroundSize: `100% 6px`,
          backgroundRepeat: `repeat-x`
        }
      }}
    >
      {linkText}
    </Link>
  );
}

export default function Header() {
  return (
    <header sx={{ variant: `layout.header` }}>
      <Link to="/" className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 50">
          <defs />
          <path
            fill="#639"
            d="M18.8889 9.72221V5.55554l4.7222 2.77778V12.5l-4.7222-2.77779zM14.1667 5.55561L9.44453 2.77783V47.2223L14.1667 50V5.55561z"
          />
          <path
            fill="#A953C6"
            d="M14.1667 12.4942l4.7223-2.77782 4.7222 2.77782-4.7222 2.7777-4.7223-2.7777zM9.44451 2.77778L14.1667 0l4.7223 2.77778-4.7223 2.77778-4.72219-2.77778zM18.8889 5.54972l4.7222-2.77778 4.7223 2.77779-4.7223 2.77777-4.7222-2.77778zM0 22.2164l4.72222-2.7778 4.72224 2.7778-4.72224 2.7777L0 22.2164zM14.1667 24.9941l-4.72224-2.7777-.00002 5.5555 4.72226-2.7778z"
          />
          <path
            fill="#53C68C"
            d="M14.1666 5.55561l4.7222-2.77778V15.2778l4.7223-2.7777V8.33339l4.7222-2.77778V16.6667l-9.4445 5.5556v25L14.1666 50V31.9445L4.72217 37.5V25.0001l4.72222-2.7778v5.5555l4.72221-2.7777V5.55561z"
          />
          <path
            fill="#639"
            d="M4.72217 24.9999l-4.72222499-2.7777v12.5L4.72217 37.4999v-12.5z"
          />
        </svg>
      </Link>
      <Link
        to="/"
        sx={{ variant: `links.secondary`, "justify-self": `flex-start` }}
      >
        <h1>Gatsby Theme Cactus</h1>
      </Link>
      <nav sx={{ variant: `layout.nav` }}>
        <span>
          <PrimaryLink to="/" linkText="Home" />
        </span>
        <span>
          <PrimaryLink to="/about/" linkText="About" />
        </span>
        <span>
          <PrimaryLink to="/archives/" linkText="Writings" />
        </span>
      </nav>
    </header>
  );
}

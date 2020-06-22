/** @jsx jsx */
import { jsx } from "theme-ui";

import { Global, Header, Footer } from "./";

export default function Layout({ children }) {
  return (
    <div sx={{ variant: `layout.pageWrapper` }}>
      <Global />
      <Header />
      <main sx={{ variant: `layout.main` }}>{children}</main>
      <Footer />
    </div>
  );
}

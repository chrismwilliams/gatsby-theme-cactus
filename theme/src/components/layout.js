/** @jsx jsx */
import { jsx } from "theme-ui";

import Global from "./global";
import Header from "./header";
import Footer from "./footer";

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

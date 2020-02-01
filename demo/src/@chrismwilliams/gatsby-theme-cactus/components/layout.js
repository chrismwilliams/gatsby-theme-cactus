/** @jsx jsx */
import { jsx } from "theme-ui";

import Global from "@chrismwilliams/gatsby-theme-cactus/src/components/global";
import Footer from "@chrismwilliams/gatsby-theme-cactus/src/components/footer";
import DefaultHeader from "@chrismwilliams/gatsby-theme-cactus/src/components/header";

export default function DemoLayout({ header, children }) {
  return (
    <div sx={{ variant: `layout.pageWrapper` }}>
      <Global />
      {header ? header : <DefaultHeader />}
      <main sx={{ variant: `layout.main` }}>{children}</main>
      <Footer />
    </div>
  );
}

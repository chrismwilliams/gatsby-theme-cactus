/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import Global from "@chrismwilliams/gatsby-theme-cactus/src/components/global";
import Header from "@chrismwilliams/gatsby-theme-cactus/src/components/header";
import Footer from "@chrismwilliams/gatsby-theme-cactus/src/components/footer";

export default function Layout({ header, children }) {
  return (
    <Styled.root>
      <div sx={{ variant: `layout.pageWrapper` }}>
        <Global />
        {header || <Header />}
        <main sx={{ variant: `layout.main` }}>{children}</main>
        <Footer />
      </div>
    </Styled.root>
  );
}

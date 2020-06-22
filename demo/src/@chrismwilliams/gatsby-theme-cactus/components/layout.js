/** @jsx jsx */
import { jsx } from "theme-ui";

import {
  Global,
  Footer,
  Header as DefaultHeader,
} from "@chrismwilliams/gatsby-theme-cactus/src/components";

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

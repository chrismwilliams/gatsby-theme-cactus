import React from "react";

import SEO from "@chrismwilliams/gatsby-theme-cactus/src/components/seo";
import Layout from "@chrismwilliams/gatsby-theme-cactus/src/components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <SEO />
      <div>
        <h2>Woops, the page you're looking for could not be found</h2>
      </div>
    </Layout>
  );
}

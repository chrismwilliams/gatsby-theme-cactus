import React from "react";

import SEO from "gatsby-theme-cactus/src/components/seo";
import Layout from "gatsby-theme-cactus/src/components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <SEO />
      <div>
        <h2>Woops, the page your looking for could not be found</h2>
      </div>
    </Layout>
  );
}

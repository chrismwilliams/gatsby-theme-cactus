import React from "react";

import SEO from "gatsby-theme-cactus/src/components/seo";
import Layout from "gatsby-theme-cactus/src/components/layout";
import Intro from "../components/intro";
import BlogList from "../components/blog-list";
import TechList from "../components/tech-list";

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <BlogList />
      <TechList />
    </Layout>
  );
}

import React from "react";

import {
  SEO,
  Layout,
} from "@chrismwilliams/gatsby-theme-cactus/src/components";
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

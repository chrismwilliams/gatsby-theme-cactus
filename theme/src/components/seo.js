import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

export default function SEO({ title, description, children }) {
  const {
    site: { siteMetadata }
  } = useStaticQuery(SEOQuery);
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: siteMetadata.author
  };
  return (
    <Helmet
      title={title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
    >
      <html lang={siteMetadata.lang} />
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="gatsby-theme" content="gatsby-theme-cactus" />
      {children}
    </Helmet>
  );
}

const SEOQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
        lang
      }
    }
  }
`;

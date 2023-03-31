import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);
  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,

    description: description || site.siteMetadata.description,
  };
  return (
    <head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </head>
  );
}

export default SEO;

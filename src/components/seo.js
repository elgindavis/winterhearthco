import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, imageUrl, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${imageUrl || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="og:description" content={seo.description} />

      <meta name="title" content={seo.title} />
      <meta name="twitter:title" content={seo.title} />
      <meta property="og:title" content={seo.title} />

      <meta name="image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />
      <meta property="og:image" content={seo.image} />

      <meta property="og:type" content="article" />
      <meta property="fb:app_id" content="#" />
      <meta property="og:url" content={seo.url} />

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Winter Hearth Studios`,
  title: `Winter Hearth Studios`,
  author: `Elgin Davis`,
};

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  author: PropTypes.string,
  host: PropTypes.string,
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

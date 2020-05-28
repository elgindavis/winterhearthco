import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ((props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
                name
                summary
            }
          }
        }
      }
    `
  )

  const metaDescription = props.description || site.siteMetadata.description
  
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: props.lang,
        }}
        title={props.title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
              name: `keywords`,
              content: props.keywords,
          },
          {
            property: `og:title`,
            content: `${props.title} | Winter Hearth Studios`,
          },
          {
              property: `og:image`, 
              content: props.imageUrl
          },
          {
              property: `og:url`,
              content: props.url,
          },
          {
              property: `author`,
              content: props.author,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
              property: `og:image:alt`, 
              content: props.imageAltText
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: metaDescription,
          },
          {
            name: `twitter:creator`,
            content: props.author || site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: props.title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(props.meta)}
      > 
      </Helmet>
      <link rel="shortcut icon" href="/img/fav.png" /> 
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    </>
  );
});

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  author: `Winter Hearth Studios`
};

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SEO;

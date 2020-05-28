import React from 'react';

import Layout from '../components/layout';

export default (props) => {
    const episodeHTML = props.data.markdownRemark.html;
    const episodeInfo = props.data.markdownRemark.frontmatter;

    return (
        <Layout
            keywords={episodeInfo.keywords}
            imageUrl={episodeInfo.imageUrl}
            imageAltText={episodeInfo.imageAltText}
            url={props.location.href}
            title={episodeInfo.title}
            description={episodeInfo.description}
        >
            <section className="pt-120">
                <div className="container">
                    <div className="row">
                        <h1>{episodeInfo.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: episodeHTML }} />
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostInfo
    }
  }
`;
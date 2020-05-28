import React from 'react'

import Layout from '../components/layout'

export default (props) => {
    const gameHTML = props.data.markdownRemark.html;
    const gameInfo = props.data.markdownRemark.frontmatter;

    return (
        <Layout
            keywords={gameInfo.keywords}
            imageUrl={gameInfo.imageUrl}
            imageAltText={gameInfo.imageAltText}
            url={props.location.href}
            title={gameInfo.title}
            description={gameInfo.description}
        >
            <section className="pt-120">
                <div className="container">
                    <div className="row">
                        <h1>{gameInfo.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: gameHTML }} />
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
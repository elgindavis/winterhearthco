import { React } from "react";

import Layout from "../components/layout";

export default (props) => {
    const postHTML = props.data.markdownRemark.html;
    const postInfo = props.data.markdownRemark.frontmatter;
    return (
        <Layout
            keywords={postInfo.keywords}
            imageUrl={postInfo.imageUrl}
            imageAlt={postInfo.imageAlt}
            url={props.location.href}
            title={postInfo.title}
            description={postInfo.description}
        >
            <title>{postInfo.title}</title>
            <h1>Game template</h1>
        </Layout>
    )
}
// console.log(graphString);
// export const query = graphString;

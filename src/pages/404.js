import React from 'react'

import Layout from "../components/layout";

export default () => (
    <Layout
        keywords=""
        imageUrl="/img/aubbie-knight.png"
        imageAltText="Winter Hearth Studios"
        url="https://winterhearth.co/404"
        title="Page Not Found | Winter Hearth Studios"
        description="Winter Hearth Studios is a quirky and charming creative studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
    >
        <div className="pt-170 pb-120" style={{margin: 20}}>
        <h1>404: Page Not Found</h1>
        This page must've gotten lost while we were running from a bear the other day! <a href='/'>Let's get you back to the site.
        </a>
        </div>
    </Layout>
);

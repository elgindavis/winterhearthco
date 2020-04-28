import React from 'react';

export const transformPostQueryData = (postList) => {
    return postList.map(post => {
        const data = post.node;
        return {
            id: data.id,
            excerpt: data.excerpt,
            frontmatter: data.frontmatter,
            date: data.frontmatter.date,
            title: data.frontmatter.title,
            articleLink: data.fields.slug,
            featured: data.frontmatter.featured,
            newsletterVolume: data.frontmatter.newsletterVolume,
            contentType: data.frontmatter.contentType,
            imageUrl: data.frontmatter.imageUrl,
            imageAlt: data.frontmatter.imageAlt,
            tags: data.frontmatter.tags,
            keywords: data.frontmatter.keywords,
            description: data.frontmatter.description,
            author: data.frontmatter.author,
        }
    });
};

export const setPostTags = (tagString) => {
    return tagString.split(", ").map((tag, index) => {
        return index !== tagString.split(", ").length - 1 ? (
            <li key={index}>{tag},&nbsp;</li>
        ) : (
                <li key={index}>{tag}</li>
            );
    });
};
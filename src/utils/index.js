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
            imageAltText: data.frontmatter.imageAltText,
            tags: data.frontmatter.tags,
            keywords: data.frontmatter.keywords,
            description: data.frontmatter.description,
            author: data.frontmatter.author,
        }
    });
};

export const getBorderStyle = (index) => {
  switch ((index + 1) % 3) {
    case 0:
      return "primary";
    case 1:
      return "secondary";
    case 2:
      return "yellow";
    default:
      return;
  }
};

export const transformPostQueryData = (postList) => {
  return postList.map((post) => {
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
      hidden: data.frontmatter.hidden,
      keywords: data.frontmatter.keywords,
      description: data.frontmatter.description,
      author: data.frontmatter.author,
      host: data.frontmatter.host,
      guests: data.frontmatter.guests,
      anchorEpisodeUrl: data.frontmatter.anchorEpisodeUrl,
      spotifyEpisodeUrl: data.frontmatter.spotifyEpisodeUrl,
      applePodcastEpisodeUrl: data.frontmatter.applePodcastEpisodeUrl,
      googlePodcastEpisodeUrl: data.frontmatter.googlePodcastEpisodeUrl,
      embedUrl: data.frontmatter.embedUrl,
      facebookShareLink: data.frontmatter.facebookShareLink,
      twitterShareLink: data.frontmatter.twitterShareLink,
    };
  });
};

export const getBorderStyle = (index) => {
  switch (index % 3) {
    case 0:
      return "primary";
    case 1:
      return "yellow";
    case 2:
      return "secondary";
    default:
      return;
  }
};

export const getImageWithSize = (imageUrl, size) => {
  return imageUrl
    .replace(/.jpg/i, `-${size}.jpg`)
    .replace(/.png/i, `-${size}.png`)
    .replace(/.jpeg/i, `-${size}.jpeg`);
};

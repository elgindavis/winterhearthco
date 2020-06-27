import React from "react";
import { SingleContentStrip } from "../";
import { getBorderStyle } from "../../utils";

export default ({ list, cover }) => {
  return list.map((edition, index) => {
    return (
      <SingleContentStrip
        color={getBorderStyle(index)}
        className="pb-20"
        key={edition.id}
        author={edition.author?.name}
        host={edition.host?.name}
        date={edition.date}
        tags={edition.tags}
        contentType={edition.contentType}
        articleTitle={edition.title}
        imageUrl={edition.imageUrl}
        articleLink={edition.articleLink}
        imageAltText={edition.imageAltText}
        excerpt={edition.description}
        cover={cover}
      />
    );
  });
};

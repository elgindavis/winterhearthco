import React from "react";
import { SinglePostRow } from "../";
import { getBorderStyle } from "../../utils";

export default ({ list, cover }) => {
  return list.map((edition, index) => {
    return (
      <SinglePostRow
        color={getBorderStyle(index)}
        className="pb-20"
        key={edition.id}
        author={edition.author?.name}
        host={edition.host?.name}
        date={edition.date}
        tags={edition.tags}
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

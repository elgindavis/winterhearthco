import React from 'react'
import { PostGridItem } from '../';
import { getBorderStyle } from "../../utils";

export default ({ list }) => {
    return list.map((edition, index) => {
        return (
          <PostGridItem
            color={getBorderStyle(index)}
            key={edition.id}
            author={edition.author}
            date={edition.date}
            articleTitle={edition.title}
            tags={edition.tags}
            imageUrl={edition.imageUrl}
            articleLink={edition.articleLink}
            imageAltText={edition.imageAltText}
            excerpt={edition.description}
          />
        );
    });
}
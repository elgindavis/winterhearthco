import React from 'react'
import { SinglePostRow } from '../';
import { getBorderStyle } from "../../utils";

export default ({ list }) => {
    return list.map((edition, index) => {
        return (
            <SinglePostRow
                color={getBorderStyle(index)}
                className="pb-20"
                key={edition.id}
                author={edition.author.name}
                date={edition.date}
                tags={edition.tags}
                articleTitle={edition.title}
                imageUrl={edition.imageUrl}
                articleLink={edition.articleLink}
                imageAltText={edition.imageAltText}
                excerpt={edition.description}
            />
        );
    });
}
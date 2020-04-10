import React from 'react';

const TagsList = (props) => {
    return (
        <ul className="tags">
            {
                props.tags.map(tag => {
                    return <li>{tag}</li>
                })
            }
        </ul>
    );
};

export default TagsList;
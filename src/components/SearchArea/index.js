import React from 'react'
import styled from 'styled-components';

const StyledSearchBar = styled.input`
  background: transparent; // var(--color-text);
  color: var(--color-gray700);
  width: 70%;
  height: 44px;
  margin: 0 20px;
  padding-left: 12px;
  border-radius: 20px;
  border: 2px solid var(--color-primary);
`;

const SearchArea = ({ posts, setSearchState, setPostList }) => {

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchState(query);

    const filteredData = posts.filter((post) => {
      const { description, title, tags } = post;
      return (
        description.toLowerCase().includes(query) ||
        title.toLowerCase().includes(query) ||
        (tags &&
          tags
            .join("") // convert tags from an array to string
            .toLowerCase()
            .includes(query))
      );
    });
    setPostList(filteredData);
  };

  return (
    <>
      <StyledSearchBar
        type="text"
        aria-label="Search"
        className="search"
        placeholder="Type to filter posts..."
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchArea;
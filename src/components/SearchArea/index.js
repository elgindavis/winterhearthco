import React from 'react'
import styled from 'styled-components';

const StyledSearchBar = styled.input`
  background: transparent;
  color: var(--color-gray700);
  width: 80%;
  height: 44px;
  margin: 0 20px;
  padding-left: 12px;
  border-radius: 20px;
  border: 2px solid var(--color-primary);
`;

const SearchArea = ({ posts, setSearchState, setPostList, type }) => {

  const handleInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchState(query);

    const filteredData = posts.filter((post) => {
      const { description, title, tags, author } = post;
      return (
        description.toLowerCase().includes(query) ||
        title.toLowerCase().includes(query) ||
        author.name.toLowerCase().includes(query) ||
        (tags &&
          tags
            .join("") // convert tags from an array to string
            .toLowerCase()
            .includes(query))
      );
    });
    setPostList(filteredData.reverse());
  };

  return (
    <>
      <StyledSearchBar
        type="text"
        aria-label="Search"
        name="search-input"
        className="search"
        placeholder={`Type to search ${type}...`}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SearchArea;
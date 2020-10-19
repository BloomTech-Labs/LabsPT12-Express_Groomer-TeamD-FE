import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar() {
  return (
    <div className="search-container">
      <Search
        placeholder="Search for Groomer"
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>
  );
}

export default SearchBar;

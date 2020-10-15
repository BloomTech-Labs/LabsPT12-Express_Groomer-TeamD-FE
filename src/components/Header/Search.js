import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar() {
  return (
    <div className="search-container">
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>
  );
}

export default SearchBar;

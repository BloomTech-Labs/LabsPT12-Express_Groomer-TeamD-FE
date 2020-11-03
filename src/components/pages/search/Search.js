import React, { useState, useEffect } from 'react';
import GroomerCards from '../GroomerCards/GroomerCards';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Search() {
  const { id } = useParams();
  const [groomers, setGroomers] = useState([]);

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  let url = `${process.env.REACT_APP_API_URI}/groomer_profile/?location=${query}`;

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setGroomers([...response.data]);
      })

      .catch(err => console.log(err));
  }, [url]);

  const updateSearch = e => {
    e.preventDefault();
    setQuery(e.target.value);
    console.log(query);
    const getGroomers = groomers.filter(e =>
      e.location_state.toLowerCase().includes(query.toLowerCase())
    );
    setGroomers(getGroomers);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(query);
    setSearch('');
    console.log(query);
  };

  return (
    <div>
      <form onSubmit={getSearch} className="searchWrapper">
        <input
          className="searchBar"
          type="text"
          text="Search"
          placeholder="Search for Groomers"
          value={query}
          onChange={updateSearch}
          search={search}
          handleSubmit={getSearch}
        />
      </form>

      <GroomerCards key={id} location={groomers.location_state} />
    </div>
  );
}

export default Search;

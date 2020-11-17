import React, { useState, useEffect } from 'react';

import { SearchableMap } from '../Maps';
// import { useParams } from 'react-router-dom';
import { getGroomers } from '../../../api';
import { SecNav } from '../../Nav';
import './search-styles.scss';

function Search() {
  // const { id } = useParams();

  const [search] = useState('');
  // const [query, setQuery] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const groomers = await getGroomers({ location_city: search });
      console.log(groomers);
      setData(groomers.data);
    };

    fetchdata();
  }, [search]);

  // const updateSearch = e => {
  //   e.preventDefault();
  //   setQuery(e.target.value);
  //   console.log('query', query);
  // };

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(query);
  //   setSearch(query);
  //   console.log(query);
  // };

  return (
    <div className="search-container">
      <SecNav />
      <div className="map-left">
        <SearchableMap marker={data} />
      </div>
    </div>
  );
}

export default Search;

import React, { useState, useEffect } from 'react';

import { SearchableMap } from '../Maps';
// import { useParams } from 'react-router-dom';
import { getGroomers } from '../../../api';
import { SecNav } from '../../Nav';
import './search-styles.scss';

function Search() {
  // const { id } = useParams();

  // const [search] = useState('');
  // const [query, setQuery] = useState('');

  const [data, setData] = useState([]);

  const fetchdata = async (viewport = {}) => {
    console.log('new', viewport);
    const queries = Object.keys(viewport).length
      ? viewport
      : {
          lat: 25.76444044442845,
          lng: -80.21152646141613,
        };
    const groomers = await getGroomers(queries);
    console.log(groomers);
    setData(groomers.data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

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
        <SearchableMap marker={data} fetchGroomers={fetchdata} />
      </div>
    </div>
  );
}

export default Search;

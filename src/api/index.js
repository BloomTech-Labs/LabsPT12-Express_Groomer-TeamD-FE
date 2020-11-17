import axios from 'axios';

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
  // return axios.get(`${apiUrl}/groomer_profiles`);
};

const getProfileData = (authState, id) => {
  try {
    const headers = getAuthHeader(authState, id);
    return axios
      .get(`${apiUrl}/profiles/${id}`, { headers })
      .then(res => res.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getGroomers = queries => {
  let url = `${apiUrl}/groomer_profile`;
  if (queries?.location_city) {
    url = url + `?location_city=${queries.location_city}`;
    // url = url + `?latitude=${queries.lat}&longitude=${queries.lng}`;
  }
  if (queries?.location_state) {
    url = url + `?location_state=${queries.location_state}`;
    // url = url + `?latitude=${queries.lat}&longitude=${queries.lng}`;
  }
  return axios.get(url);
};

const getGroomerBusinessData = (authState, id) => {
  try {
    const headers = getAuthHeader(authState, id);
    return axios
      .get(`${apiUrl}/groomer_profiles/${id}`, { headers })
      .then(res => res.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  apiAuthGet,
  getGroomers,
  getGroomerBusinessData,
};

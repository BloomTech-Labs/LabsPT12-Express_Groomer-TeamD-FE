import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import { getProfileData } from '../../api';

class UserProfile extends Component {
  constructor() {
    super(getProfileData);
    this.state = { user: '', search: '' };
    console.log(`user profile constructed`);
  }

  componentDidMount(getProfileData) {
    console.log(`user profile mounted`);
    axios
      .get(`https://labspt12-express-groomer-d-api.herokuapp.com/profiles/`)
      .then(response => this.setState({ user: response.data }))
      .catch(error => console.log('something went wrong'));
  }

  changeHandler = e => {
    this.setState({ [e.target.first_name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .get(
        `https://labspt12-express-groomer-d-api.herokuapp.com/profiles/${this.state.search}`
      )
      .then(response => this.setState({ user: response.data }))
      .catch(error => console.log('something went wrong'));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(`user profile updated`);
    if (prevState.search !== this.state.search) {
      axios
        .get(
          `https://labspt12-express-groomer-d-api.herokuapp.com/profiles/${this.state.search}`
        )
        .then(response => this.setState({ user: response.data }))
        .catch(error => console.log('something went wrong'));
    }
  }

  render() {
    console.log(`user profile rendered`);
    return (
      <div className="appContainer">
        <form className="searchForm" onSubmit={this.submitHandler}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.changeHandler}
            placeholder="search a profile"
          />
          <button>Search</button>
        </form>
        <UserCard
          image={this.state.user.avatar_url}
          firstname={this.state.user.first_name}
          lastnane={this.state.user.last_name}
          email={this.state.user.email}
          location={this.state.user.location}
        />
      </div>
    );
  }
}
export default UserProfile;

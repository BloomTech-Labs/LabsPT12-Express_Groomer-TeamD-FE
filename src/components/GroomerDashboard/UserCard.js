import React from 'react';

const UserCard = props => {
  console.log('card rendered');
  return (
    <div className="userCard">
      <img className="userImage" src={props.image} alt="pic" />
      <div className="userInfo">
        <h1 className="firstName">{props.first_name}</h1>
        <h1 className="lastName">{props.last_name}</h1>
        <p>Email:{props.email}</p>
        <p>Location:{props.location}</p>
      </div>
    </div>
  );
};

export default UserCard;

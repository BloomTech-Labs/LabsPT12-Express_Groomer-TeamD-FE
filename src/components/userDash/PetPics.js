import React from 'react';
import { Card } from 'antd';

function GroomerCards({ groomers }) {
  return (
    <div className="groomerWrapper">
      {groomers.map(e => (
        <Card className="groomerCard" bordered={false}>
          <h1>{e.business_name}</h1>
          <img className="groomer-img" src={e.profile_picture} alt="groomers" />
          <h2> Location: </h2>
          <p>State: {e.location_state}</p>
          <p>City: {e.location_city}</p>
          <p>Zip: {e.location_zip}</p>
        </Card>
      ))}
    </div>
  );
}

export default GroomerCards;

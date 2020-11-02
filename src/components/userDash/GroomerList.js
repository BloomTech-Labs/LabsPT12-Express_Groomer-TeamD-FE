import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';

function GroomerList() {
  const [data, setData] = useState({});
  useEffect(() => {}, []);
  axios
    .get(
      'https://labspt12-express-groomer-d-api.herokuapp.com/groomer_profile/'
    )
    .then(res => {
      console.log(res.data);
      setData(res.data);
    });
  return (
    <div>
      <h1>Groomers</h1>
      <Card title={data.business_name} bordered={false} style={{ width: 300 }}>
        <img
          className="groomer-img"
          src={data.profile_picture}
          alt="groomers"
        />
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default GroomerList;

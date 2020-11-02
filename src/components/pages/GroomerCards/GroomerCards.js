import React, { useState, useEffect } from 'react';
import { getGroomers } from '../../../api';
import { Card } from 'antd';

function GroomerCards() {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const groomers = await getGroomers();
    console.log(groomers);
    setData(groomers.data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Groomers</h1>
      {data.map(e => (
        <Card title={e.business_name} bordered={false} style={{ width: 300 }}>
          <img className="groomer-img" src={e.profile_picture} alt="groomers" />
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      ))}
    </div>
  );
}

export default GroomerCards;

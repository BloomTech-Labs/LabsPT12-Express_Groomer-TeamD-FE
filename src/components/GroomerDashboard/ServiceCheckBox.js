import React from 'react';
//import ReactDOM from 'react-dom';
import { Checkbox, Row, Col } from 'antd';

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}

export function ServiceCheckBox() {
  return (
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
      <Row>
        <Col span={20}>
          <Checkbox value="Wash">Wash</Checkbox>
        </Col>
        <Col span={20}>
          <Checkbox value="Style">Style</Checkbox>
        </Col>
        <Col span={20}>
          <Checkbox value="Cut">Cut</Checkbox>
        </Col>
        <Col span={20}>
          <Checkbox value="Deep Conditioning">Deep Conditioning</Checkbox>
        </Col>
        <Col span={20}>
          <Checkbox value="Clip Nails">Clip Nails</Checkbox>
        </Col>
        <Col span={30}>
          <Checkbox value="Teeth Brushing">Teeth Brushing</Checkbox>
        </Col>
        <Col span={20}>
          <Checkbox value="Ear Cleaning">Ear Cleaning</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
}

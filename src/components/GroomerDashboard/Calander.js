import React from 'react';
import { Calendar } from 'antd';
import ReactDOM from 'react-dom';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div className="appointment-card">
    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
  </div>
);

export default Calendar;

import React from 'react';
import { Calendar } from 'antd';
import ReactDOM from 'react-dom';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

ReactDOM.render(
  <div className="appointment-card">
    <Calendar fullscreen={true} onPanelChange={onPanelChange} />
    date()
  </div>
);

export default Calendar;

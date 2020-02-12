import React, { useState } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const calculateTimeToBirthday = birthday =>
  moment
    .duration(
      moment(birthday, 'DD-MM')
        .startOf('d')
        .diff(moment(), 's'),
      'seconds'
    )
    .format('D [day] H [hour] m[min] s[sec]');

const Person = ({ name, age, birthday, children }) => {
  const initTime = calculateTimeToBirthday(birthday);

  const [timeCounterState, setTimeCounterState] = useState(initTime);
  setInterval(() => {
    setTimeCounterState(calculateTimeToBirthday(birthday));
  }, 1000);
  return (
    <div>
      <p>
        I'm a person.
        <span>My name {name}. </span>
        <span>I'm {age} year's old</span>
        {children}
        <span>Time to my birthday: {timeCounterState}</span>
      </p>
    </div>
  );
};

export default Person;

import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
window.jQuery = $;
require('jquery-clock-timepicker');
//     jquery jquery-clock-timepicker
const App = () => {
  const [data, setData] = useState('');
  const headRef = useRef();

  const handleClick = () => {
    const el = headRef.current;
    console.log(el);

    $(el).slideToggle();
  };

  useEffect(() => {
    $('.time').clockTimePicker({
      duraion: true,
      durationNegative: true,
      precision: 5,
      i18: {
        cancelButton: 'Cancel',
      },
      onAdjust: (val, prev) => {
        console.log(val, prev);
      },
    });

    $('.button').on('click', () => {
      setData('D A T A');
    });
  }, []);

  return (
    <div className='App'>
        123
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import './Clock.scss';

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [timeShow, setTimeShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
  };
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date());
      setTimeShow(true);
    }, 1000);
    setTimerId(id);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };
  const stringTime = date.toLocaleTimeString();
  const stringDate = date.toLocaleDateString();

  return (
    <div className="clock">
      <div className="clock__wrapper">
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {timeShow && <div className="clock__time">{stringTime}</div>}
        </div>

        {show && <div>{stringDate}</div>}
      </div>
      <div>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
      </div>
    </div>
  );
}

export default Clock;

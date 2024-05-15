import { useState, useEffect } from 'react';
import "./counter.scss";

const formatTimeUnit = (unit) => {
  return unit < 10 ? `0${unit}` : unit;
};

const calculateTimeLeft = () => {
  const difference = +new Date("2024-12-31") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    timeLeft = {
      days: formatTimeUnit(days),
      hours: formatTimeUnit(hours),
      minutes: formatTimeUnit(minutes),
      seconds: formatTimeUnit(seconds)
    };
  }

  return timeLeft;
};

const Counter = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className='counter'>
      <div className='counter-title'>Time to Wedding</div>
      <div></div>
      <div className='counter-all'>
        {timeLeft.days && <span className='day'>{timeLeft.days} gün </span>}
        {timeLeft.hours && <span className='hour'>{timeLeft.hours} saat </span>}
        {timeLeft.minutes && <span className='minute'>{timeLeft.minutes} dakika </span>}
        {timeLeft.seconds && <span className='second'>{timeLeft.seconds} saniye </span>}
        {!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds && <span className='day'>Düğün zamanı geldi!</span>}
      </div> 
    </div>
  );
};

export default Counter;

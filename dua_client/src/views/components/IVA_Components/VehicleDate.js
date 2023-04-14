import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const VehicleDate = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []);

  const formatDateTime = (date) => {
    const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date);
    const suffix = ['th', 'st', 'nd', 'rd'][(day % 100 >> 3 ^ 1) && day % 10];
    const time = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(date);

    return `${dayOfWeek}, ${month} ${day}${suffix}, ${time}`;
  };

  return (
    <DateContainer>
      <DateTime>{formatDateTime(currentTime)}</DateTime>
    </DateContainer>
  );
};

const DateContainer = styled.div`
  position: absolute;
  top: 6px;
  left: 39px;
`;

const DateTime = styled.h1`
  font-family: 'Roboto', Helvetica, Arial, serif;
  font-size: 35px;
  font-weight: 400;
  line-height: 0.74;
  color: #fff;
  letter-spacing: 0.42px;

  @media (max-width: 991px) {
    font-size: 28px;
    text-align: left;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }

  @media (max-width: 575px) {
    font-size: 20px;
  }
`;

export default VehicleDate;
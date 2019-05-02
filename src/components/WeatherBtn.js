import React from 'react';
import axios from 'axios';
import Icon from './Icon';

const WeatherBtn = props => {
  const handleWeather = () => {
    axios
      .get('https://geoip-db.com/json/')
      .then(res => {
        window.open(`https://weather.com/weather/tenday/l/${res.data.postal}`);
      })
      .catch(err => console.log(err));
  };
  return (
    <Icon
      icon='ac_unit'
      color={props.night ? '#eee' : '#282c34'}
      onClick={handleWeather}
      title={props.title}
    >
      Get the Weather
    </Icon>
  );
};

export default WeatherBtn;

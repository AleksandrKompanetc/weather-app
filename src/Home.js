import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

function Home() {

  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 10,
    speed: 2,
    image: ''
  });
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    if (name !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=150a49263a5b1ff973b07348fc7e8bda&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          let imagePath = '';
          setData({
            ...data, celcius: res.data.main.temp, name: res.data.name,
            humidity: res.data.main.humidity, speed: res.data.wind.speed
          })
          setError('');
        })
        .catch(err => {
          if (err.response.status == 404) {
            setError('Invalid Sity Name');
          } else {
            setError('');
          }
        });
    }
  }

  return (
    <div className='container'>
      <div className='weather'>
        <div className='search'>
          <input type='text' placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
          <button><img src='./search.jpg' onClick={handleClick} alt='search' /></button>
        </div>
        <div className='error'>
          <p>{error}</p>
        </div>
        <div className='winfo'>
          <img src='./clouds13.png' width='150px' alt='clouds' className='icon' />
          <h1>{Math.round(data.celcius)} ℃</h1>
          <h2>{data.name}</h2>
          <div className='details'>
            <div className='col'>
              <img src='./humidity7.png' width='50px' alt='Humidity' className='col-img' />
              <div className='humidity'>
                <p>{Math.round(data.humidity)} %</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className='col'>
              <img src='./wind.png' width='50px' alt='Wind' className='col-img' />
              <div className='wind'>
                <p>{Math.round(data.speed)} km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
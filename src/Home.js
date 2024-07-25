import React from 'react';
import './style.css';

function Home () {
  return (
    <div className='container'>
      <div className='weather'>
        <div className='search'>
          <input type='text' placeholder='Enter City Name' />
          <button><img src='./search.jpg' width='20px' alt='search1' /></button>
        </div>
      </div>
    </div>
  )
}

export default Home;
import React from 'react';
import './progressbar.scss';

const Progressbar = () => {
  return (
    <div className='box'>
      <div className="persent">

        <svg>
          <circle cx={70} cy={70} r={70}></circle>
          <circle cx={70} cy={70} r={70}></circle>
        </svg>
        <div className="number">
          <h2>72<span>%</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Progressbar
import React from 'react';
import './chart.scss';
import { UserData } from '../../Data';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Chart = () => {

  return (
    <div className='chart'>
<div className="title">Last 6 Mounths (Revenue)</div>
     <ResponsiveContainer width="100%" aspect={ 2/1}>
        <AreaChart
          width={500}
          height={400}
          data={UserData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" stroke='gray' />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      </div>
  )
}

export default Chart
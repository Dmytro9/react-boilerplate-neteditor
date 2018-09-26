import React, { Component } from 'react'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend,
  Area,
  ReferenceDot,
} from 'recharts'


class ChartComponents extends Component {
  render() {
    const { data } = this.props

    return (
      <ResponsiveContainer width='100%' height={260}>
        <LineChart data={data}
          margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" stroke="#ccc" />
          {/* <YAxis orientation='right' /> */}
          <Tooltip />

          {/* <Legend iconType='star' /> */}
          <ReferenceLine className='ert' x="September" stroke="red" label="Today" />

          <ReferenceLine y={500} label="Target" stroke="blue" />
          <ReferenceLine y={550} label="Fair" stroke="blue" />

          <ReferenceLine y={480} label="Low" stroke="blue" />

          <ReferenceDot y={480} label="MAX" r={20} fill="red" stroke="blue" />

          <Line dot={false} type="monotone" dataKey="pv" stroke="#8884d8" width={10} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    )
  }
}


export default ChartComponents

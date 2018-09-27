import React, { Component } from 'react'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  ReferenceLine,
  ScatterChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Label,
  Text,
  ReferenceArea,
} from 'recharts'
import SVG from '../SVG'

class ChartComponents extends Component {
  render() {
    const { data } = this.props

    return (
      <ResponsiveContainer width='100%' height={440}>
        <LineChart data={data}
          margin={{ top: 20, right: 50, left: 20, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis  dataKey="name" stroke="#e5e5e5" />
          {/* <XAxis dataKey="pv" stroke="red" type='number' /> */}
          <YAxis orientation='right' dataKey="pv" domain={[400, 'dataMax']} hide={true} />
          <Tooltip />
              
          {/* <Legend iconType='star' /> */}
          <ReferenceLine x="October" stroke="#20aeec" className='today' >
          {/* <Label position='bottom' fill="#0058b2" offset={-30} >
              Today
                      </Label> */}
          </ReferenceLine>

          <ReferenceLine y={500} className='target' stroke="#0058b2" >
            <Label position='insideTopLeft' fill="#0058b2" >
              Target
            </Label>
            <Label fill="#0058b2" content={<SVG />} />
            <Label position='insideTopRight' fill="#0058b2">
              500
            </Label>
          </ReferenceLine>

          <ReferenceLine className='fair' y={550} stroke="#e5e5e5" >
            <Label position='insideTopLeft'  >
              Fair
                      </Label>
            <Label position='insideTopRight'>
              550
                      </Label>
          </ReferenceLine>

          <ReferenceLine className='low' y={480} stroke="#e5e5e5" >
            <Label position='insideTopLeft'>
              Low
                      </Label>
            <Label position='insideTopRight' >
              480
                      </Label>
          </ReferenceLine>
          {/* <ReferenceArea  className='refToday' x1={'September'} x2={'November'} y1={462} y2={476} > */}
          <ReferenceArea viewBox={{x: 420, y: 420, width: 150, height: 120}} className='refToday'  >
          <Label >
              Today
                      </Label>
          </ReferenceArea>
          <Label fill="#0058b2" content={<SVG />} />

          <Line dot={{r: 10}} type="monotone" dataKey="pt" stroke="#20aeec" width={10} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    )
  }
}


export default ChartComponents

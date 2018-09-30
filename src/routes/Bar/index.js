import React, { Component } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  //  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ScatterChart,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Area,
  Label,
  Text,
  ReferenceArea,
  ReferenceDot,
} from 'recharts'
import Smile from '../../common/containers/Smile'


class BarChar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Week1', pv: 10, pt: 33 },
        { name: 'Week2', pv: 30, pt: 70 },
        { name: 'Week3', pv: 60, pt: 72 },
        { name: 'Week4', pv: 90, pt: 54 },
      ]
    }
  }

  render() {
    const { data } = this.state
    return (
      <BarChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }} width={460} height={360} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis tickLine={false} dataKey="name" />
        <YAxis dataKey="pv" hide={true} domain={[30, 'dataMax']} />
        <Tooltip />
        {/* <CartesianGrid vertical={false} verticalPoints={[0, 45, 75]} /> */}
        <ReferenceLine className='' y={30} stroke="#e5e5e5" >
          <Label position='insideTopLeft'  >
            30k
          </Label>
        </ReferenceLine>
        <ReferenceLine className='' y={45} stroke="#e5e5e5" />
        <ReferenceLine className='' y={60} stroke="#e5e5e5" >
          <Label position='insideTopLeft'  >
            60k
          </Label>
        </ReferenceLine>
        <ReferenceLine className='' y={75} stroke="blue" >
          <Label fill="#0058b2" position='insideTopLeft' content={<Smile />} />
        </ReferenceLine>
        <ReferenceLine className='' y={90} stroke="#e5e5e5" >
          <Label position='insideTopLeft'  >
            90k
          </Label>
        </ReferenceLine>
        <Bar barSize={5} dataKey="pt" fill="rgb(32, 174, 236)" />
      </BarChart>
    )
  }
}


export default BarChar

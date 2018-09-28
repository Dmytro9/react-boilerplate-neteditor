import React, { Component, Fragment } from 'react'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis,
  ReferenceLine,
  ScatterChart,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  Area,
  Label,
  Text,
  ReferenceArea,
  ReferenceDot,
} from 'recharts'
import SVG from '../SVG'
import may from '../../../assets/img/may.svg'

class CustomAxisTick extends Component {


  render() {
    console.log(this.props)

    const arr = ['red', 'blue']
    let c

    const {payload, y} = this.props

    if (payload.value === 2) {
      return (
        <Text y={y + 10} x={payload.coordinate} className='aprile' width={50} angle={30}>Aprile</Text>
      )
    } 

    if (payload.value === 6) {
      return (
        <Text y={y + 10} x={payload.coordinate} width={30} className='june' textAnchor={'middle'}>June</Text>
      )
    } 

    if (payload.value === 20) {
      return (
        <Text y={y + 10} x={payload.coordinate} width={100} className='may' textAnchor={'middle'}>May</Text>
      )
    } 
    
    else {
      return null
    }

  }
}

class ChartComponents extends Component {
  render() {
    const { data } = this.props
    // console.log(this.props)
    // tick={<CustomAxisTick />}
    return (
      <ResponsiveContainer width='100%' height={440}>
        <LineChart data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          
    <XAxis  dataKey="name" stroke="#e5e5e5" tick={<CustomAxisTick />} />
          {/* <XAxis dataKey="pv" stroke="red" type='number' /> */}
          
          <YAxis dataKey="pv" domain={[400, 'dataMax']} hide={true} />
          <Tooltip />

          <Line  dot={false} type="monotone" dataKey="pt" stroke="#20aeec" width={10} />
          {/* <Legend iconType='star' /> */}
          
          <ReferenceLine x="28" stroke="#20aeec" className='today' viewBox={{x: 5, y: 10, width: 10, height: 50}}>
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
          {/* <Label > */}
              {/* Today */}
                      {/* </Label> */}
          {/* </ReferenceArea> */}
          <Label fill="#0058b2" content={<SVG />} />

         
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          <ReferenceDot className='refDot' x={28} y={475} r={10} fill="#20aeec" stroke="#fafafa" stroke-width={5} isFront={true} >
              {/* <Label position='bottom' offset={20}>
                Todaydfvdfvdfv
              </Label>      */}
              <Label className='todayScore' position='top' offset={20} fill="#20aeec">
                475
              </Label>  
              {/* <Label fill="#0058b2" content={<SVG />} viewBox= { {x: 120, y: 475, width: 100, height: 100} } />       */}
          </ReferenceDot>
          <ReferenceArea  className='refToday' x1={27} x2={29} y1={452} y2={466}>
          <Label >
            Today
          </Label> 
          </ReferenceArea>  
        </LineChart>
      </ResponsiveContainer>
    )
  }
}


export default ChartComponents

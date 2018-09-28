import React, { Component } from 'react'
import ChartComponents from '../../common/containers/ChartComponents'

import './rechart.scss'


class Rechart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 1, pv: 420, pt: 410 },
        { name: 2, pv: 430, pt: 420 },
        { name: 3, pv: 440, pt: 430 },
        { name: 4, pv: 460, pt: 450 },
        { name: 5, pv: 480, pt: 460 },
        { name: 6, pv: 500, pt: 470 },
        { name: 7, pv: 550, pt: 475 },
        { name: 8, pv: 420, pt: 410 },
        { name: 9, pv: 430, pt: 420 },
        { name: 10, pv: 440, pt: 430 },
        { name: 11, pv: 460, pt: 450 },
        { name: 12, pv: 480, pt: 460 },
        { name: 13, pv: 500, pt: 470 },
        { name: 14, pv: 550, pt: 475 },
        { name: 15, pv: 420, pt: 410 },
        { name: 16, pv: 430, pt: 420 },
        { name: 17, pv: 440, pt: 430 },
        { name: 18, pv: 460, pt: 450 },
        { name: 19, pv: 480, pt: 460 },
        { name: 20, pv: 500, pt: 470 },
        { name: 21, pv: 550, pt: 475 },
        { name: 22, pv: 420, pt: 410 },
        { name: 23, pv: 430, pt: 420 },
        { name: 24, pv: 440, pt: 430 },
        { name: 25, pv: 460, pt: 450 },
        { name: 26, pv: 480, pt: 460 },
        { name: 27, pv: 500, pt: 470 },
        { name: 28, pv: 550, pt: 475 },
        { name: 29, },
        { name: 30, },
        { name: 31, },
        { name: 32, },
        // { pv: 550 },
        // { uv: 2300, },
      ]

       // data: [
      //   { name: 10, pv: 420, pt: 420,  },
      //   { name: {name: 12, prop: "yanuar"}, pv: 430, pt: 420 },
      //   { name: {name: 13, prop: "februar"},pv: 430, pt: 420 },
      //   { name: {name: 16, prop: "mart"}, pv: 430, pt: 420 },
      //   { name: {name: 15, prop: "aprile"}, pv: 430, pt: 420 },
      //   { name: {name: 18, prop: "aprile"}, pt: 440 },
      //   { name: {name: 20, prop: "may"}, pv: 460, pt: 450 },
      //   { name: {name: 22, prop: "may"}, pv: 480, pt: 470 },
      //   { name:{name: 23, prop: "june"}, pv: 500, pt: 470 },
      //   { name: {name: 25, prop: "julay"}, pv:   550, pt: 475, },
      //   { name: {name: 27, prop: "august"}, pv: 480, pt: 470 },
      //   { name: {name: 29, prop: "september"},pv: 500, pt: 470 },
      //   { name: {name: 32, prop: "October"}, pv: 550, pt: 475, },
      //   { name:{name: 34, prop: "October"}, },
      //   { name: "October", },
      //   { name: {name: 38, prop: "October"}, },
      //   { name: {name: 40, prop: "October"}, },
      // ]
    }
  }

  render() {

    return (
      <div className='rechart-wrap'>
        <ChartComponents data={this.state.data} />
      </div>
    )
  }
}


export default Rechart
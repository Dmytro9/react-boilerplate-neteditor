import React, { Component } from 'react'
import ChartComponents from '../../common/containers/ChartComponents'

import './rechart.scss'


class Rechart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Aprill', pv: 420, pt: 420,  },
        { name: 'May', pv: 430, pt: 420 },
        { name: 'June', pv: 440, pt: 440 },
        { name: 'July', pv: 460, pt: 450 },
        { name: 'August', pv: 480, pt: 470 },
        { name: 'September', pv: 500, pt: 470 },
        { name: 'October', pv: 550, pt: 480, },
        { name: 'November', },
      ]
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
import React, { Component } from 'react'
import ChartComponents from '../../common/containers/ChartComponents'

import './rechart.scss'


class Rechart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: 'Aprill', pv: 120, },
        { name: 'May', pv: 160, },
        { name: 'June', pv: 200, },
        { name: 'July', pv: 260, },
        { name: 'August', pv: 330, },
        { name: 'September', pv: 480, id: 't' },
        { name: 'October', pv: 550, },
        { name: 'November', pv: 600, },
        // { uv: 2300, },
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
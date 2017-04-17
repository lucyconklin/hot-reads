import React, { Component } from 'react'
import './Link.css'

class Link extends Component {

  render () {
    console.log(this.props.title)
    return <div className='Link'>
      { this.props.title}
      { this.props.url }
    </div>
  }
}

export default Link;

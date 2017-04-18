import React, { Component } from 'react'
import './Link.css'

class Link extends Component {

  render () {
    console.log(this.props.title)
    return <a className="link-link" href={ this.props.url }>
      <div className='Link'>
        <p className="link-url">{ this.props.url } </p>
      </div>
    </a>
  }
}

export default Link;

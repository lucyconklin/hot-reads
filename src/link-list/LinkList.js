import React, { Component } from 'react'
import './LinkList.css'
import Axios from 'axios'

class LinkList extends Component {

  constructor() {
    super();
    this.state = { links: [] };
  }

  componentDidMount(){
    this.retrieveLinks()
  }

  retrieveLinks() {
    Axios.get('https://url-lockbox.herokuapp.com/api/v1/test')
    .then(result => {
      this.setState({ links: result.data })
    })
  }

  render () {
    return <div className='LinkList'>
      <h1>{ this.state.links }</h1>
    </div>
  }
}

export default LinkList;

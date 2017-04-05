import React, { Component } from 'react';
import './LinkList.css';

class LinkList extends Component {

  constructor() {
    super();
    this.state = { links: [] };
  }

  componentDidMount(){
    this.retrieveLinks()
  }

  retrieveLinks() {
    var that = this;
    fetch('https://url-lockbox.herokuapp.com/api/v1/test')
    .then(result => result.json())
    .then(data => {
      that.setState({ links: data })
      return true
    })
  }

  render () {
    return <div className='LinkList'>
      { this.state.links }
    </div>
  }
}

export default LinkList;

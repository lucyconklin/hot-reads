import React, { Component } from 'react'
import './LinkList.css'
import Axios from 'axios'
import Link from '../link/Link'

class LinkList extends Component {

  constructor() {
    super();
    this.state = { links: [] };
  }

  componentDidMount(){
    this.retrieveLinks()
  }

  retrieveLinks() {
    Axios.get('https://url-lockbox.herokuapp.com/api/v1/hot-reads')
    .then(result => {
      this.setState({ links: result.data })
    })
  }

  eachLink(link){
    console.log(this)
    return <Link key={ link.id } title={ link.title } url={ link.url } />
  }

  render () {
    return <div className='LinkList'>
      { this.state.links.map(this.eachLink) }
    </div>
  }
}

export default LinkList;

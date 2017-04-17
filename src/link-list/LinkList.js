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
    console.log(link)
    return <Link key={ link.id } url={ link.url } count={ link.read_count } />
  }

  render () {
    return <div className='LinkList'>
      { this.state.links.map(this.eachLink) }
    </div>
  }
}

export default LinkList;

import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div>
        <input className='search-box' type="search" placeholder='Search Pokemon'  onChange={this.props.value}/>
      </div>
    )
  }
}

export default Search
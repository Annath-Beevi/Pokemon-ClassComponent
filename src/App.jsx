import React, { Component } from 'react'
import Display from './Compoents/Display'
import Search from './Compoents/search'
import './App.css'

export class App extends Component {
  constructor(){
    super()
    this.state={
      pokemon:[],
      search:""
    }
  }
  componentDidMount(){
    const url = "https://pokeapi.co/api/v2/pokemon"
    const fetched = fetch(url)
    .then((fetched)=>fetched.json())
    .then((fetched)=>{this.setState({pokemon:fetched.results})})
    .then((fetched)=>console.log(fetched))
  }
  handleChange=(event)=>{
    const searchField = event.target.value.toLowerCase()
    this.setState(()=>{return{search:searchField}})
  }

  render() {
    const filteredPokemon=this.state.pokemon.filter((item)=>
    item.name.toLowerCase().includes(this.state.search.toLowerCase())
  )
    return (
      <>
      <div>
      <input className='search-box' type="search" placeholder='Search Pokemon' onChange={this.handleChange}/>
      <div>
      <div className='card-list'>
        {filteredPokemon.map((item, index) => (
          <div className='card-container'>
           <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index+1}.png`}  />
           <p  key={index}>{item.name}</p>
          </div>
        ))}
      </div>
      </div>
      </div>  
      </>
    )
  }
}
export default App


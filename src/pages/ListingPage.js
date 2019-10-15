import React, {Component} from 'react'
import axios from 'axios'
import PokemonList from '../components/PokemonList'
import SearchBar from '../pages/Navbar/SearchBar'

class ListingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: '',
            newPokemon: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            input: e.currentTarget.value,
            newPokemon: this.state.newPokemon.filter(newPokemon => newPokemon.name)
        })
    }

    render(){
        return (
            <div className="container">
                <SearchBar handleChange={this.handleChange} value={this.state.input}/>
                <PokemonList newPokemon={this.props.newPokemon}/>
            </div>
        )
    }
}

export default ListingPage;

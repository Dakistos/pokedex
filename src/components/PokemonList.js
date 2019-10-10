import React, {Component} from 'react'
import Cell from './PokemonContainer'
import axios from 'axios'

const API = 'https://pokeapi.co/api/v2/pokemon/'


class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            isLoading: false
        };
    }

    async componentDidMount(){
        const response = await axios.get(API);
        this.setState({pokemon: response.data['results']})
    }

    render(){
        return (
            <div>
            <h1>Pokemon</h1>
            <p>{this.state.pokemon.map((pokemon, i) => (
                <Cell
                key={i}
                name={pokemon.name}
                />
            ))}</p>
            </div>
        )
    }
}

export default PokemonList;

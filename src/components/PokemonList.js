import React, {Component} from 'react'
import Container from './PokemonContainer'
import axios from 'axios'


class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            isLoading: false
        };
    }


    async componentDidMount(){
        const API = 'https://pokeapi.co/api/v2/pokemon?limit=100'

        const response = await axios.get(API);
        this.setState({pokemon: response.data['results']})
        console.log(response.data['results'])
    }

    render(){
        return (
            <div>
                <h1>Pokemon</h1>
                <p>{this.state.pokemon.map((pokemon, i) => (
                    <Container
                    key={i}
                    name={pokemon.name}
                    sprites={pokemon.url}
                    />
                    ))}
                </p>
            </div>
        )
    }
}

export default PokemonList;

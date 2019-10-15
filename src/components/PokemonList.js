import React, {Component, Fragment} from 'react'
import Container from './PokemonContainer'
import axios from 'axios'
import loader from '../css/images/pokeball.gif'
import '../css/loader.css'


class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
            isLoading: false
        };
    }

    async componentDidMount(){
        this.setState({
            isLoading: true
        })
        const API = 'https://pokeapi.co/api/v2/pokemon?limit=100'

        try{
            const response = await axios.get(API);
            this.setState({pokemon: response.data['results'],
                isLoading: false
            })
            //console.log(response.data['results'])
        }
        catch(error){
            this.setState({
                isLoading: false,
                error: error.message
            })
            throw error
        }
    }

    render(){
        return (
            <Fragment>
                {!this.state.isLoading ?
                    <div className="row">
                        {this.state.pokemon.map((pokemon, i) => (
                                <Container
                                    key={i}
                                    {...pokemon}
                                    pokemonUrl={pokemon.url}/>
                                )
                            )
                        }
                    </div>
                    : <img className='loader' src={loader}/>
                }
            </Fragment>
        )
    }
}

export default PokemonList;

import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import loader from '../css/images/pokeball.gif'

class PokemonContainer extends Component {
    state = {
        name: '',
        index: '',
        img: ''
    }

    componentDidMount(){
        const {name, pokemonUrl} = this.props

        const index = pokemonUrl.split('/')[pokemonUrl.split('/').length - 2];
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
        this.setState({name, img, index})
    }

    render(){
        return (
            <div className="col-md-4 col-sm-6">
                <Link to={`pokemon/${this.state.name}`}>
                    <div className='card'>
                        <div className="card-header">
                            <h2>{this.state.name}</h2>
                        </div>
                        <div className="card-body">
                            <img src={this.state.img}/>
                        </div>
                    </div>
                </Link>
            </div>

        )
    }
}

export default PokemonContainer;

import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'
import '../css/List.css'

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
            <Fragment>
                <div className="col-md-4 col-sm-6">
                    <Link to={`pokemon/${this.state.name}`}>
                        <div className='card'>
                            <div className="card-header">
                                <h2 className="pokemon-name">{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h2>
                            </div>
                            <div className="card-body">
                                <img src={this.state.img}/>
                            </div>
                        </div>
                    </Link>
                </div>
            </Fragment>
        )
    }
}

export default PokemonContainer;

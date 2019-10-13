import React, {Component} from 'react'
import '../css/cell.css'

class PokemonContainer extends Component {
    state = {
        name: '',
        index: '',
        img: ''

    }

    componentDidMount(){
        const {name, sprites} = this.props

        const index = sprites.split('/')[sprites.split('/').length - 2];
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
        this.setState({name, img, index})
    }

    render(){
        return (
            <button className='cell'>
                <p>{this.state.name}</p>
                <img src={this.state.img}/>
            </button>
        )
    }
}

export default PokemonContainer;

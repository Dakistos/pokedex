import React, {Component} from 'react'
import axios from 'axios'
import '../css/pokemonDetails.css'

import TYPE_COLORS from '../utils/TypeColor'

class PokemonDetails extends Component {
    state = {
        name: '',
        index: '',
        img: '',
        abilities: '',
        type: [],
        poids: '',
        taille: '',
        stats: {
          hp: '',
          attack: '',
          defense: '',
          speed: '',
          specialAttack: '',
          specialDefense: ''
      },
        typeColor: ''
    }

    async componentDidMount(){
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.index}`)

        const name = resp.data.name
        const img = resp.data.sprites.front_default
        const taille = resp.data.height
        const poids = resp.data.weight
        const type = resp.data.types.map(types => types.type.name)

        const abilities = resp.data.abilities
          .map(ability => {
            return ability.ability.name
              .toLowerCase()
              .split('-')
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ');
          })
          .join(', ');

        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        resp.data.stats.map(stat => {
          switch (stat.stat.name) {
            case 'hp':
              hp = stat['base_stat'];
              break;
            case 'attack':
              attack = stat['base_stat'];
              break;
            case 'defense':
              defense = stat['base_stat'];
              break;
            case 'speed':
              speed = stat['base_stat'];
              break;
            case 'special-attack':
              specialAttack = stat['base_stat'];
              break;
            case 'special-defense':
              specialDefense = stat['base_stat'];
              break;
            default:
              break;
          }
        });

        const typeColor = `${TYPE_COLORS[type[type.length - 1]]}`;

        this.setState({name, img, abilities, taille, poids, type, typeColor,
            stats : {
              hp,
              attack,
              defense,
              speed,
              specialAttack,
              specialDefense
            }
        })
    }

    render () {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md">
                        <h1>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h1>
                        <img src={this.state.img} />
                        <p>Taille : {this.state.taille} - Poids : {this.state.poids}</p>
                        <p>Capacités : {this.state.abilities}</p>
                        {this.state.type.map(type => (
                                <span key={type} className='badge'
                                    style={{backgroundColor: `#${TYPE_COLORS[type]}`, color: 'white'}}>
                                    {type.toUpperCase()}
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className="card">
                            <div className="card-header">
                                <h3>Statistiques</h3>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Vie</p>
                                        <p>Vitesse</p>
                                        <p>Défense</p>
                                        <p>Attaque</p>
                                        <p>Attaque Spéciale</p>
                                        <p>Défense Spéciale</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.stats.hp}</p>
                                        <p>{this.state.stats.speed}</p>
                                        <p>{this.state.stats.defense}</p>
                                        <p>{this.state.stats.attack}</p>
                                        <p>{this.state.stats.specialAttack}</p>
                                        <p>{this.state.stats.specialDefense}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonDetails;

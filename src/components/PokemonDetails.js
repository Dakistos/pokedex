import React, {Component} from 'react'
import axios from 'axios'

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
        }
    }

    async componentDidMount(){
        const {index} = this.props.match.params
        const url = `https://pokeapi.co/api/v2/pokemon/${index}`
        const resp = await axios.get(url)

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


        this.setState({name, img, abilities, taille, poids, type,
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
            <div>
                <h1>{this.state.name}</h1>
                <img src={this.state.img} />
                <p>Capacités : {this.state.abilities}</p>
                <p>Types : {this.state.type}</p>
                <p>Taille : {this.state.taille} - Poids : {this.state.poids}</p>
                <p>Vie : {this.state.stats.hp}</p>
                <p>Vitesse : {this.state.stats.speed}</p>
                <p>Défense : {this.state.stats.defense}</p>
                <p>Attaque : {this.state.stats.attack}</p>
                <p>Attaque Spéciale : {this.state.stats.specialAttack}</p>
                <p>Défense Spéciale : {this.state.stats.specialDefense}</p>
            </div>
        )
    }
}

export default PokemonDetails;

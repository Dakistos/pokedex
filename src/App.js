import React, {Component} from 'react'
import ListingPage from './pages/ListingPage'
import PokemonList from './components/PokemonList'
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <div className="App">
                <ListingPage />
            </div>
        )
    }
}

export default App;

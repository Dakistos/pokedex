import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import ListingPage from './pages/ListingPage'
import PokemonDetails from './components/PokemonDetails'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
    render(){
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" component={ListingPage} />
                        <Route exact path="/pokemon/:index" component={PokemonDetails} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;

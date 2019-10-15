import React, {Component} from 'react'

class SearchBar extends Component {
    render(){
        return (
            <nav className="navbar navbar-light bg-dark">
                <form className="form-inline my-2 my-lg-0" onSubmit={e => this.props.handleSubmit(e)}>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.props.handleChange}/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}

export default SearchBar;

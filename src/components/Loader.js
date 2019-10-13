import React from 'react'
import '../css/loader.css'

class Loader extends React.Component {
  render () {
    return (
        //<img src='../css/images/pokeball.gif' />
        <div className="lds-dual-ring"></div>
    )
  }
}

export default Loader;

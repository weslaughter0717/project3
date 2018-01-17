import React from 'react'
import { Link } from 'react-router'

export default class extends React.Component {
  render() {
    return (
      <p className="App-intro">
        This is a different page
        <br/>
        <Link to="/">home</Link>
        <br/>
        <Link to="/custom">Custom</Link>
      </p>
    )
  }
}


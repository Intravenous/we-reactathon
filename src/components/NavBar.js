import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="./components/Home">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a> */}

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/cocktails">Cocktails</Link>
          <Link className="navbar-item" to="/search">Search</Link>
        </div>

        {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  }
}

export default withRouter(NavBar)
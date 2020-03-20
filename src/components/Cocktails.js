import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Cocktails extends React.Component {

  constructor() {
    super()
    this.state = {
      cocktails: []
    }
  }

  componentDidMount() {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(response => {
        // console.log(response.data.drinks)
        this.setState({ cocktails: response.data.drinks })
      })
      .catch(err => console.error(err))

  }

  render() {
    return <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {this.state.cocktails.map(cocktail => {
            return <div key={cocktail.idDrink} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-3by4">
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  </figure>
                </div>
                <div className="card-content has-text-centered">
                  <Link to={`/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
                  {/* <p className="has-text-grey-darker">{cocktail.strDrink}</p> */}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  }

}

export default Cocktails


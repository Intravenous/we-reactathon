import React from 'react'
import axios from 'axios'

class SingleCocktail extends React.Component {

  constructor() {
    super()
    this.state = {
      // Return from APi is an object with an array in and so needs to be set to null rather than an array initially
      cocktail: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => {
        console.log(response.data.drinks)
        this.setState({ cocktail: response.data.drinks })
      })
      .catch(err => console.error(err))

  }

  render() {
    console.log(this.props.match)
    console.log(this.state.cocktail)
    return <section className="section">
      <h1>Hello</h1>
    </section>
  }

  // How would I cater for a variable number of ingredients 
  // const { strDrink, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strMeasure1, strMeasure2, strMeasure3, strMeasure4 } = this.state.cocktail
  // return <section className="section">

  // </section>
}

export default SingleCocktail
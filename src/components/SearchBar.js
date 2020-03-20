import React from 'react'

// Pass in props for change and submit
const SearchBar = ({ handleChange, handleSubmit }) => {
  return (
    <div className="Search">
      <div className="container">
        <h1 className="title has-text-centered">Search for a Cocktail By Your Favourite Ingredient!</h1>
        <div className="field is-horizontal has-addons">
          <div className="field-body">
            <div className="control is-expanded">
              <input
                className="input"
                type="search"
                placeholder="What's your favourite tipple?"
                // do something when something typed in
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button onClick={handleSubmit} className="button is-danger">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

//Search by ingredient
// axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
// Search by first letter
// axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')

export default SearchBar
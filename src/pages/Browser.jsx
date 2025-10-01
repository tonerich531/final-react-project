import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Browser = () => {
  return (
    <div className="browser__container">
        <div className="row">
            <div className="header__title--wrapper">
                <h1 className="header__title">Browse Our movies</h1>
                <div className="input__wrapper">
                    <input type="text" placeholder="Search for a movie or show..." className="search__input" />
                    <figure>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </figure>
                </div>
            </div>
            <div className="search__container">
                <div className="row">
                    <div className="section__title">
                        <h1 className="title">
                            <span className="search__info">Search Results</span>
                            <span className="search__name"></span>
                        </h1>
                        <div className="year__filter">
                            <select name="movie__sort" id="movieSort">
                                <option disabled selected value="sort">Sort by Years</option>
                                <option value="newest">Newest to Oldest</option>
                                <option value="oldest">Oldest to Newest</option>
                                    </select>
                        </div>
                    </div>
                    <div className="movies">


                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Browser

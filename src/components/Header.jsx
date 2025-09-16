import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import MovieLogo from '../assets/4eb359766faf2364a099b03879b4d181.jpg'




const Header = () => {
  return (
    <div>
        <header className="movie__header">
            <div className="header__logo">
                <img src={ MovieLogo } alt=""className='movie__logo' />
            </div>
            <ul className="header__links">
                <li className='header__list'>
                    <Link to="/" className="header__link">
                        Home
                    </Link>
                </li>
                <li className='header__list'>
                    <Link to="" className='header__link'>
                        Find Your Movie
                    </Link>
                </li>
                <button className="btn">Contact</button>
            </ul>
        </header>
    </div>      
  )
}

export default Header

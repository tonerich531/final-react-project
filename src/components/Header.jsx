import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { MovieLogo } from '../assets/4eb359766faf2364a099b03879b4d181.jpg'




const Header = () => {
  return (
    <div>
        <div className="section__header">
            <div  className="section__logo">
                <img src={MovieLogo} className="movie__logo" alt="" />                    
                <div className="header__links">
                    <div className="header__list">
                        <Link to="#" className="header__link header__link--anchor">Home</Link>                                
                        <Link to="#search" className="header__link header__link--anchor">Find Your Movie</Link>                             
                        <Link to="" className="header__link header__link--anchor">
                            <button className="btn">Contact</button>
                        </Link>
                        <button className="btn__menu" onclick="openMenu()">
                            <FontAwesomeIcon icon="bars" />
                        </button>                
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header

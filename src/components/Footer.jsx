import React from 'react'
import FooterLogo from '../assets/movie-film-reel-EKeqB4E-600.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__img--wrapper">
            <img src={ FooterLogo } alt="" className="footer__img" />
        </div>
        <ul className="footer__links">
            <li>
                <Link to= "/" className="footer__link">
                    Home                
                </Link>
            </li>
            <li>
                <Link to= "" className="footer__link">
                    Find Your Movie
                </Link>
            </li>
            <li>
                <Link to= "" className="footer__link">
                    Contact
                </Link>
            </li>
        </ul>              
    </div>
  )
}

export default Footer

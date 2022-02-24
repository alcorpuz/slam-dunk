import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './header-style.scss';



function Header({currentUser}) {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 700px)");
      mediaQuery.addListener(handleMediaQueryChange);
      handleMediaQueryChange(mediaQuery);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
  
    const handleMediaQueryChange = mediaQuery => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    return (
        <header className="Header">
            <Link to="/" className="Logo">
                <img src="/images/pizza.jpg" alt="logo" className="dunk-logo"/>
            </Link>
        {(!isSmallScreen || isNavVisible) && (
            <nav className="Nav">
            <Link to='/menu' className="header-item">
                Menu
            </Link>
            <div className="dropdown">
                <button className="dropbtn">Locations
                    <i className="fa fa-caret-down"></i>
                </button>
                <div id="myDropdown1" className="dropdown-content">
                    <Link to="/redwood-valley">Redwood Valley</Link>
                    <Link to="/ukiah">Ukiah</Link>
                    <Link to="/willits">Willits</Link>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">More
                    <i className="fa fa-caret-down"></i>
                </button>
                <div id="myDropdown2" className="dropdown-content">
                    <Link to="/arcade">Arcade</Link>
                    <Link to="/parties">Parties</Link>
                    <Link to="/catering-events">Catering/Events</Link>
                    <Link to="/donations">Donation Requests</Link>
                    <Link to="/careers">Career Opportunities</Link>
                </div>
            </div>
        </nav>
        )}
        <button onClick={toggleNav} className='Pizza'>
            🍕
        </button>
        </header>
    );

}

export default Header;

// Responsive React header guide followed to learn: "https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb" 
// by Sid Bentifraouine.